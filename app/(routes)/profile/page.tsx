"use client";
import { PROFILE } from "@/app/data/profile";
import { useEffect, useState } from "react";

export default function Profile() {
  const [show, setShow] = useState(false);
  const info = PROFILE.article.info;
  const history = PROFILE.article.history;
  useEffect(() => {
    // const id = timer.setTimer(() => {
    //   setShow(true);
    // }, 500);
    // return () => timer.clearTimer(id);
    setShow(true);
  }, []);
  return (
    <>
      {show ? (
        <div className=" overflow-auto  sm:w-5/6 md:w-1/2  border-2  h-full p-5 mx-10 mb-5 border-green-400 text-left">
          <div>
            <h1 className="text-center text-2xl">Profile</h1>
            {Object.keys(info).map((key, index) => {
              if (key == "tel") {
                return (
                  <div key={index}>
                    <a href={`tel:${info[key]}`}>
                      {key}: {info[key]}
                    </a>
                  </div>
                );
              } else {
                return (
                  <div key={index}>
                    {key}: {info[key]}
                  </div>
                );
              }
            })}
          </div>
          <hr className=" border-collapse border-green-400 my-5"></hr>
          <div>
            <h1 className="text-center text-2xl">History</h1>
            {Object.keys(history).map((_, index) => {
              const line = history[index];
              return (
                <div key={index}>
                  {line.period} - {line.experience}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
