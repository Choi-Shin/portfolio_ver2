"use client";
import { useEffect, useState } from "react";
import useIntervals from "../hooks/interval";
import useTimeouts from "../hooks/timeout";
import { OpacityInfo } from "../types/ui";
import { TMenu } from "../types/menu";
import Link from "next/link";

import { usePathname } from "next/navigation";

export function Menu() {
  const [opacityInfo, setOpacityInfo] = useState<OpacityInfo>({
    opacity: 0,
    timerId: undefined,
    intervalId: undefined,
    up: false,
  });
  const { setTimer, clearTimer } = useTimeouts();
  const { setIntervalTimer, clearIntervalTimer } = useIntervals();
  const pathname = usePathname();
  function growOpacity() {
    if (opacityInfo.up) {
      setOpacityInfo((prev) => ({ ...prev, opacity: 0, up: false }));
    } else {
      setOpacityInfo((prev) => ({
        ...prev,
        opacity: prev.opacity + 0.1,
        up: true,
      }));
    }
  }
  function speaker() {
    const id = setIntervalTimer(growOpacity, 100);
    setOpacityInfo((prev) => ({ ...prev, intervalId: id }));
  }
  useEffect(() => {
    const id = setTimer(() => {
      speaker();
    }, 1000);
    setOpacityInfo((prev) => ({ ...prev, timerId: id }));
  }, []);
  useEffect(() => {
    if (opacityInfo.opacity > 1) {
      setOpacityInfo((prev) => ({ ...prev, opacity: 1 }));
      clearIntervalTimer(opacityInfo.intervalId!);
      clearTimer(opacityInfo.timerId!);
      return;
    }
  }, [opacityInfo]);

  const menu: TMenu = {
    profile: {
      src: "/profile",
      helpText: "프로필 소개",
    },
    skills: {
      src: "/skills",
      helpText: "기술 소개",
    },
    project: {
      src: "/project",
      helpText: "프로젝트 소개",
    },
    contact: {
      src: "/contact",
      helpText: "연락처",
    },
  };
  useEffect(() => {
    console.log(pathname);
  }, []);

  return (
    <ul
      className="flex flex-row justify-evenly w-full mb-5"
      style={{
        opacity: opacityInfo.opacity,
      }}
    >
      {Object.keys(menu).map((value, index) => {
        return (
          <li
            key={index}
            className={`${
              pathname == menu[value].src ? "border-2 border-green-400 " : ""
            } p-2`}
          >
            <Link href={menu[value].src}>{value}</Link>
          </li>
        );
      })}
    </ul>
  );
}
