import React from "react";

const tmbl = () => {
  console.log("haol");
};
function Tmblbtn() {
  return (
    <>
      <div>
        <button onClick={tmbl} className="tmb text-white p-5 bg-slate-500">
          Click
        </button>
      </div>
    </>
  );
}

export default Tmblbtn;
