/** @format */

import React, { useState } from "react";
import Questions from "./Api";
import MyAccordion from "./MyAccordion";
function Accordion() {
  const [data, setData] = useState(Questions);
  return (
    <>
      <h1>Interview Questions</h1>
      {data.map((e) => {
        // return console.log(e);
        return (
          <MyAccordion question={e.question} answer={e.answer} key={e.id} />
        );
      })}
    </>
  );
}

export default Accordion;
