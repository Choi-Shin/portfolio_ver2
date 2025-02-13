"use client";

import { useEffect, useState } from "react";
import { TSkill } from "../data/skills";
import { Modal } from "./modal";
import Image from "next/image";

export function SkillItem({
  image,
  // improvements,
  skill,
}: //detail,
// progress,
TSkill) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log(skill, show);
  }, [show]);
  return (
    <div
      // onMouseOver={() => setShow(true)}
      // onMouseLeave={() => setShow(false)}
      onClick={(e) => {
        console.log(e.currentTarget.textContent);
        e.stopPropagation();
        if (show) {
          setShow(false);
        } else {
          setShow(true);
        }
      }}
    >
      {skill}
      {show ? (
        <div
          onClick={() => {
            setShow(false);
          }}
          className="absolute z-50 top-0 left-0 w-full h-full"
        >
          <Modal
            title={skill}
            content={
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <div className="p-24">
                  <Image src={image} width={30} height={30}></Image>
                </div>
              </div>
            }
            func={() => setShow(false)}
          ></Modal>
        </div>
      ) : (
        <></>
      )}
      {/* <HoverSkill item={{ detail, show, setShow }}></HoverSkill> */}
    </div>
  );
}
