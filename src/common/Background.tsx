export default function Background() {
  return (
    <>
      <div
        className={`
        top-0 
        back 
        fixed
        h-screen 
        w-screen
        bg-blue-900
        
        `}
      ></div>
      <div
        className={`
      top-0 
      back 
      fixed
      h-screen 
      w-screen
      bg-gradient-to-b from-black via-blue-900 to-black
      opacity-50
      `}
      ></div>
      <div
        className={`
      top-0 
      back 
      fixed
      h-screen 
      w-screen
      bg-gradient-to-r from-black via-gray-900 to-black
      opacity-30
      `}
      ></div>
    </>
  );
}
