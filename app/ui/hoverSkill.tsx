import { Dispatch, SetStateAction } from "react";
type TProp = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  detail: string;
};
export function HoverSkill({ item }: { item: TProp }) {
  return (
    <>
      {item.show ? (
        <div className="w-40 fixed !z-50 bg-black !opacity-100">
          {item.detail}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
