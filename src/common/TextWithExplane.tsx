import React from "react";

interface TextWithExplaneInterface {
  explane: string;
  union: string;
  text: string | null;
}

export function TextWithExplane({
  explane,
  union,
  text,
}: TextWithExplaneInterface) {
  return (
    <div className="italic font-bold">
      {explane} {union} <span className="text-red-500">{text}</span>
    </div>
  );
}
