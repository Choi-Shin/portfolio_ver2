"use client";

import MultiTypingEffect from "./util/MultiTypingEffect";

// import { useSearchParams } from "next/navigation";
// import { useEffect } from "react";

export default function Home() {
  const texts = ["안녕하시오?", "반가워용"];
  return (
    <>
      <MultiTypingEffect texts={texts}></MultiTypingEffect>
    </>
  );
}
