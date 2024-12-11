import { Dispatch, SetStateAction } from "react";
type TProp = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  detail: string;
};
export function HoverSkill({ item }: { item: TProp }) {
  const details = item.detail.split("-");
  const detail = [];
  for (let i = 0; i < details.length; i++) {
    if (details[i] == "") {
      continue;
    }
    detail.push(details[i].trim());
  }
  return (
    <>
      {item.show ? (
        <div className="w-80 fixed !z-50 bg-black !opacity-100">
          <ul>
            {detail.map((value, index) => (
              <li key={index} className=" text-left text-sm mb-1">
                {value}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
