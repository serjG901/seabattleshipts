import React from "react";

interface TextWithExplaneInterface {
  explane: string;
  union: string;
  text: string | null;
  color?: string | undefined;
}

export function TextWithExplane({
  explane,
  union,
  text,
  color = "red-500",
}: TextWithExplaneInterface) {
  return (
    <div className="italic font-bold">
      {explane} {union} <span className={`text-${color}`}>{text}</span>
    </div>
  );
}
