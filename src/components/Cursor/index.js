import React, { useEffect } from "react";
import mouse from "../../components/common/mouse";

export default function Cursor  ()  {
 useEffect(() => {
    mouse();
  }, []);
  return (
    <>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </>
  );
};

