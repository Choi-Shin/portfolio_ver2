import { useEffect, useState } from "react";
import useTimeouts from "../hooks/timeout";
import useIntervals from "../hooks/interval";

export function Title() {
  const [opacity, setOpacity] = useState(0);
  const [id, setId] = useState<NodeJS.Timeout>();
  const timer = useTimeouts();
  const interval = useIntervals();

  useEffect(() => {
    if (opacity > 1) {
      setOpacity(1);
      interval.clearIntervalTimer(id!);
    }
  }, [id, interval, opacity]);
  useEffect(() => {
    function grow() {
      const id = interval.setIntervalTimer(() => {
        setOpacity((prev) => prev + 0.1);
      }, 100);
      setId(id);
    }
    const id = timer.setTimer(() => {
      grow();
      timer.clearTimer(id);
    }, 1000);
  }, [timer, id, interval]);
  return <h1 style={{ opacity: opacity }}>신초이의 포트폴리오</h1>;
}
