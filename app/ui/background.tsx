import { useEffect, useState } from "react";
import useTimeouts from "../hooks/timeout";
import bgStyles from "../styles/background.module.css";
import useIntervals from "../hooks/interval";
import { OpacityInfo } from "../types/ui";
type TPos = {
  x: number;
  y: number;
  gyroX: number | undefined;
  gyroZ: number | undefined;
};
export function Background({ x, y, gyroX, gyroZ }: TPos) {
  const [opacityInfo, setOpacityInfo] = useState<OpacityInfo>({
    opacity: 0,
    timerId: undefined,
    intervalId: undefined,
    up: false,
  });
  const [windowSize, setWindowSize] = useState<{
    x: number | undefined;
    y: number | undefined;
  }>({ x: undefined, y: undefined });
  const [angles, setAngles] = useState<{ angleX: number; angleZ: number }>({
    angleX: 0,
    angleZ: 0,
  });
  const { setTimer, clearTimer } = useTimeouts();
  const { setIntervalTimer, clearIntervalTimer } = useIntervals();

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
  function angleCalculator() {
    if (gyroX != undefined && gyroZ != undefined) {
      setAngles({ angleX: gyroX, angleZ: gyroZ });
      return;
    }
    if (windowSize.x != undefined && windowSize.y != undefined) {
      const maxWidth = windowSize.x;
      const maxHeight = windowSize.y;
      const middleX = maxWidth / 2;
      const middleY = maxHeight / 2;

      const xDegree = middleY - y;
      const angleX = 20 * (xDegree / middleY);
      const zDegree = middleX - x;
      const angleZ = 6 * (zDegree / middleX);
      setAngles({ angleX: angleX, angleZ: angleZ });
    }
    return;
  }
  useEffect(() => {
    const id = setTimer(() => {
      speaker();
    }, 1500);
    setOpacityInfo((prev) => ({ ...prev, timerId: id }));
  }, [setTimer, speaker]);
  useEffect(() => {
    if (opacityInfo.opacity > 1) {
      setOpacityInfo((prev) => ({ ...prev, opacity: 1 }));
      clearIntervalTimer(opacityInfo.intervalId!);
      clearTimer(opacityInfo.timerId!);
      return;
    }
  }, [clearIntervalTimer, clearTimer, opacityInfo]);
  useEffect(() => {
    angleCalculator();
  }, [angleCalculator]);
  useEffect(() => {
    if (window !== undefined) {
      const X = window.innerWidth;
      const Y = window.innerHeight;
      setWindowSize({ x: X, y: Y });
    }
    if (gyroX != undefined && gyroZ != undefined) {
    }
  }, [gyroX, gyroZ]);
  return (
    <>
      <div
        style={{
          transform: `translate3d(0px,0px,0px) scale3d(1,1,1) rotateX(${angles.angleX}deg) rotateY(0deg) rotateZ(${angles.angleZ}deg) skew(0deg, 0deg)`,
          transformStyle: `preserve-3d`,
          opacity: 1,
        }}
        className={bgStyles.grid}
      >
        <div className={bgStyles.gridLines}></div>
      </div>
      <div className={bgStyles.gridMask}></div>
      <div className={bgStyles.crt}></div>
    </>
  );
}
