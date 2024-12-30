"use client";

import { useEffect, useState } from "react";
import { TSkill } from "../data/skills";
import { HoverSkill } from "./hoverSkill";
import { Modal } from "./modal";

export function SkillItem({
  // image,
  // improvements,
  skill,
  detail,
}: // progress,
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
        e.stopPropagation();
        if (show) {
          setShow(false);
        } else {
          setShow(true);
        }
      }}
    >
      {skill}
      <div
        onClick={() => {
          setShow(false);
        }}
        className="absolute z-50 top-0 left-0 w-full h-full"
      >
        {show ? (
          <Modal
            title={skill}
            content={<div>{detail}</div>}
            func={() => setShow(false)}
          ></Modal>
        ) : (
          <></>
        )}
      </div>
      {/* <HoverSkill item={{ detail, show, setShow }}></HoverSkill> */}
    </div>
  );
}
