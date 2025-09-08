import React from "react";
function Button(props) {
  return (
    <>
      <button className="bg-white p-10">{props.btn}</button>
    </>
  );
}

export default Button;
