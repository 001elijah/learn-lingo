import React, { useEffect } from "react";

const Favorites = ({ changeColor }: { changeColor: Function }) => {
  useEffect(() => {
    changeColor("#f8f8f8");
  }, [changeColor]);
  return <div>Favorites</div>;
};

export default Favorites;
