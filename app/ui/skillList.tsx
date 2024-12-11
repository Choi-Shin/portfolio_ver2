import { TSkill } from "../data/skills";
import { SkillItem } from "./skillItem";

export function SkillList({ items }: { items: TSkill[] }) {
  return (
    <>
      {items.map((skill, idx) => {
        return (
          <div key={idx}>
            <SkillItem {...skill}></SkillItem>
          </div>
        );
      })}
    </>
  );
}
