import { useState } from "react";

const Square = ({ val }) => {
  const [i, setI] = useState(0);

  const handleClick = () => {
    setI(i + 1);
    console.log("click", i, Date.now());
  }
  
  return (
    <button 
      className="square" 
      onClick={handleClick}
    >
      {i}
    </button>
  );
};

export default Square;
