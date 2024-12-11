"use client";

import { useState } from "react";
import { TSkill } from "../data/skills";
import { HoverSkill } from "./hoverSkill";

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
      className=" relative pointer-events-auto"
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {skill}
      <HoverSkill item={{ detail, show, setShow }}></HoverSkill>
    </div>
  );
}
