import React, { useEffect } from "react";
import TeachersView from "../views/TeachersView";

const Teachers = ({ changeColor }: { changeColor: Function }) => {
  useEffect(() => {
    changeColor("#f8f8f8");
  }, [changeColor]);

  return <TeachersView />;
};

export default Teachers;
