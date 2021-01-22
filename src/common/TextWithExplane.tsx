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
    <div className="italic font-bold text-gray-400">
      <p className={`text-${color}`}>{text}</p>{" "}
      <p>
        {explane}
        {union}{" "}
      </p>
    </div>
  );
}
