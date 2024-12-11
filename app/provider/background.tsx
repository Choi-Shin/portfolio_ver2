"use client";
import { Background } from "../ui/background";
import bgStyles from "../styles/background.module.css";
import { Title } from "../ui/title";
import { Logo } from "../ui/logo";
import { Menu } from "../ui/menu";
import { useCallback, useEffect, useState } from "react";
import { Modal } from "../ui/modal";
import Image from "next/image";
export function BackgroundProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [alertShow, setAlertShow] = useState(false);
  const [mousePos, setMousePos] = useState<{
    x: number;
    y: number;
    gyroX: number | undefined;
    gyroZ: number | undefined;
  }>({
    x: 0,
    y: 0,
    gyroX: undefined,
    gyroZ: undefined,
  });
  const handleDeviceOrientation = useCallback((e: DeviceOrientationEvent) => {
    setMousePos((prev) => ({ ...prev, gyroX: e.beta!, gyroZ: e.gamma! }));
  }, []);
  useEffect(() => {
    window.addEventListener("deviceorientation", handleDeviceOrientation);
    return () =>
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
  }, [handleDeviceOrientation]);
  useEffect(() => {}, [mousePos]);
  useEffect(() => {
    if (window !== undefined) {
      const UA = window.navigator.userAgent;
      const result = /Chrome/.test(UA);
      if (result) {
        const isPass = sessionStorage.getItem("pass");
        if (!isPass) {
          sessionStorage.setItem("pass", "false");
        } else {
          if (isPass == "true") {
            setAlertShow(false);
            return;
          }
          setAlertShow(true);
        }
      }
    }
  }, []);
  return (
    <div
      className={bgStyles.mainWrapper}
      onMouseMove={(event) => {
        setMousePos((prev) => ({
          ...prev,
          x: event.clientX,
          y: event.clientY,
        }));
      }}
    >
      {alertShow ? (
        <Modal
          title="더 좋은 사용자 경험을 위해 추천합니다."
          content={
            <div className="">
              <div className="p-24">
                <a
                  target="blank"
                  href="https://chromewebstore.google.com/detail/custom-cursor-for-chrome/ogdlpmhglpejoiomcodnpjnfgcpmgale"
                  className="flex flex-row  border-b-2 border-green-400 m-10"
                >
                  <Image
                    src="https://lh3.googleusercontent.com/H2MMZR0mOR25jQf_4GdtDTufefua3igDkUq9TXdzfdqHXxkp9zfuVp3gSqAKRWGG2urjM0PlMIdLuZWcWRAtlUvZ=s60"
                    alt="ddd"
                    width={30}
                    height={30}
                  ></Image>
                  커스텀 커서 - 크롬 확장프로그램
                </a>
              </div>
              <div className="mx-2">
                <button
                  className="w-full border-solid border-green-400 border-2"
                  onClick={() => {
                    sessionStorage.setItem("pass", "true");
                    setAlertShow(false);
                  }}
                >
                  다시 보지 않기
                </button>
              </div>
            </div>
          }
          func={() => {
            setAlertShow(false);
          }}
        ></Modal>
      ) : (
        <></>
      )}
      <Background
        x={mousePos.x}
        y={mousePos.y}
        gyroX={mousePos.gyroX}
        gyroZ={mousePos.gyroZ}
      ></Background>
      <div className={bgStyles.contentWrapper}>
        <Title></Title>
        <Logo></Logo>
        <Menu></Menu>
        {children}
      </div>
    </div>
  );
}
