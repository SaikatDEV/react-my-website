import React, { useState } from "react";

const Toggle = ({ title, children }) => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  const switchToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="question" onClick={switchToggle}>
      <h4>{title}</h4>
      {toggle ? children : ""}

      <div className="faq-line"></div>
    </div>
  );
};

export default Toggle;
