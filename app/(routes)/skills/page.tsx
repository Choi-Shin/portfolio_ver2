import { SKILL } from "@/app/data/skills";
import { SkillList } from "@/app/ui/skillList";
export default function Skills() {
  const data = SKILL;
  return (
    <div>
      <ul className="grid grid-cols-5 gap-2 max-mobile:grid-cols-2">
        {Object.keys(data).map((k, index) => {
          return (
            <li key={index}>
              <h1 className="text-xl border-b-2 border-green-400">{k}</h1>
              <SkillList items={data[k]}></SkillList>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
