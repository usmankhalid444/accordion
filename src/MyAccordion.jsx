/** @format */

import React, { useState } from "react";

function MyAccordion(props) {
  const [show, setshow] = useState(false);
  const plusfun = () => {
    setshow(!show);
  };
  return (
    <>
      <div className="questions">
        <h1>
          <span className="plus" onClick={plusfun}>
            {show ? "➖" : "➕"}
          </span>{" "}
          {props.question}
        </h1>
      </div>
      <div className="answers"></div>
      {show && <h2>{props.answer}</h2>}
    </>
  );
}

export default MyAccordion;
