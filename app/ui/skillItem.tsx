"use client";

import { useState } from "react";
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
  return (
    <div
      // onMouseOver={() => setShow(true)}
      // onMouseLeave={() => setShow(false)}
      onClick={() => setShow(true)}
    >
      {skill}
      <div
        onClick={() => setShow(true)}
        className="fixed top-0 left-0 z-0 w-full h-full"
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
