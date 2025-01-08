import Image from "next/image";
import blank from "../assets/imgs/blank.svg";
import dot from "../assets/imgs/dot.svg";
import { useEffect, useState } from "react";
import { LogoOpacity } from "../types/ui";
import useTimeouts from "../hooks/timeout";
import Link from "next/link";

export function Logo() {
  const [opacityInfo, setOpacityInfo] = useState<LogoOpacity>({
    intervalId: undefined,
    timerId: undefined,
    opacity: 0,
    blankImg: false,
    up: false,
  });
  const timer = useTimeouts();

  useEffect(() => {
    if (opacityInfo.opacity < 1) {
      const id = timer.setTimer(() => {
        if (opacityInfo.up) {
          setOpacityInfo((prev) => ({
            ...prev,
            up: false,
            opacity: prev.opacity * 0.5,
          }));
        } else {
          setOpacityInfo((prev) => ({
            ...prev,
            up: true,
            opacity: prev.opacity + 0.7,
          }));
        }
      }, 200);
      return () => timer.clearTimer(id);
    } else {
      setOpacityInfo((prev) => ({ ...prev, opacity: 1 }));
    }
  }, [opacityInfo.opacity]);
  useEffect(() => {
    const id = timer.setTimer(() => {
      setOpacityInfo((prev) => ({ ...prev, blankImg: !prev.blankImg }));
    }, 500);
    return () => timer.clearTimer(id);
  }, [opacityInfo.blankImg]);

  return (
    <Link href="/">
      <Image
        src={opacityInfo.blankImg ? blank : dot}
        width={200}
        //   height={100}
        alt="computer-image"
        color="transparent"
        priority
        style={{ opacity: opacityInfo.opacity }}
      ></Image>
    </Link>
  );
}
