interface ShipViewInterface {
  direction: string;
}

export function ShipView({ direction }: ShipViewInterface) {
  const shipStyle = `
    absolute 
    w-1/5 
    h-1/5 
    bg-blue-900 
    `;

  return (
    <>
      <div className={`top-0 ${shipStyle} ${direction}`}></div>
      <div className={`bottom-0 ${shipStyle} ${direction}`}></div>
    </>
  );
}
