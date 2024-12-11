import { useEffect, useRef } from "react";

type IntervalID = NodeJS.Timeout;
export default function useIntervals() {
  const intervalIDs = useRef<Set<IntervalID>>(new Set());
  const setIntervalTimer = (callback: () => void, delay: number) => {
    const id: IntervalID = setInterval(callback, delay);
    intervalIDs.current.add(id);
    return id;
  };
  const clearIntervalTimer = (id: IntervalID) => {
    if (id != undefined) {
      clearInterval(id);
      intervalIDs.current.delete(id);
    }
  };
  const clearAllIntervalTimers = () => {
    intervalIDs.current.forEach(clearIntervalTimer);
    intervalIDs.current.clear();
  };
  const printAllIntervalTimers = () => {
    intervalIDs.current.forEach((id) => console.log(id));
  };
  useEffect(() => {
    return () => clearAllIntervalTimers();
  }, []);
  return {
    setIntervalTimer,
    clearIntervalTimer,
    clearAllIntervalTimers,
    printAllIntervalTimers,
  };
}
