import React from "react";

function FixedMenuBox({
  children,
  containerStyle,
}: {
  children: React.ReactNode;
  containerStyle?: string;
}) {
  return (
    <div
      className={`fixed top-0 left-0 bg-[#7df9ff] border-r-2 border-b-2 z-100  ${containerStyle}`}
    >
      {children}
    </div>
  );
}

export default FixedMenuBox;
