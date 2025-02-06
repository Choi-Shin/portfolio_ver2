"use client";
import { ChangeEvent, useEffect, useState } from "react";
import design from "../../styles/design.module.css";
import githubImg from "../../imgs/github.png";
import Image from "next/image";
import Link from "next/link";
import dragIcon from "../../imgs/dragIcon.png";
import useIntervals from "@/app/hooks/interval";
import { TSlider } from "@/app/types/slider";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [moveInfo, setMoveInfo] = useState<{
    transX: number;
    direction: boolean;
  }>({ transX: 0, direction: true });
  const interval = useIntervals();
  function typing(event: ChangeEvent<HTMLTextAreaElement>) {
    const value = event.currentTarget.value;
    setMessage(value);
  }
  function makeQueryString() {
    let result = "sms:010-5143-1026?body=";
    for (let i = 0; i < message.length; i++) {
      if (message[i] == " ") {
        result += "%20";
      } else if (message[i] == "\n") {
        result += "%0A";
      } else {
        result += message[i];
      }
    }
    window.open(result);
  }
  useEffect(() => {
    const id = interval.setIntervalTimer(() => {
      setMoveInfo((prev) => {
        if (prev.direction) {
          if (prev.transX >= 10) {
            return { transX: prev.transX - 1, direction: false };
          } else {
            return { ...prev, transX: prev.transX + 1 };
          }
        } else {
          if (prev.transX <= -10) {
            return { transX: prev.transX + 1, direction: true };
          } else {
            return { ...prev, transX: prev.transX - 1 };
          }
        }
      });
    }, 40);
    return () => interval.clearIntervalTimer(id);
  }, []);
  const slider: TSlider = {
    data: [
      {
        header: "랄랄라",
        content: (
          <div className="h-full flex flex-col ">
            <textarea
              className={design.textarea}
              onChange={(event) => {
                typing(event);
              }}
            ></textarea>
            <a draggable={false} onClick={makeQueryString}>
              문자보내기
            </a>
          </div>
        ),
      },
      {
        header: "랄롤릴",
        content: (
          <div className="h-full flex flex-col justify-center">
            <a draggable={false} href="mailto:shincho1990@naver.com">
              메일 보내삼
            </a>
          </div>
        ),
      },
      {
        header: "github",
        content: (
          <div
            draggable={false}
            className="h-full flex flex-col justify-center items-center"
          >
            <Image
              draggable={false}
              src={githubImg}
              width={100}
              alt="github"
            ></Image>
            <Link target="blank" href={"https://github.com/Choi-Shin"}>
              신초이의 깃허브 저장소
            </Link>
          </div>
        ),
      },
    ],
  };
  return (
    <div className="h-full flex flex-col items-center">
      <Image
        src={dragIcon}
        style={{ opacity: 0.7, transform: `translateX(${moveInfo.transX}px)` }}
        width={30}
        alt="드래그 아이콘"
        className="mb-5"
      ></Image>
      {slider.data.map((value, index) => (
        <div key={index}>{value.header}</div>
      ))}
    </div>
  );
}
