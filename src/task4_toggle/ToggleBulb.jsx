//!TASK 4-->toggle-->submit it before 29th june

//?* I will consider this task for your mock
//? Create a component ToggleBulb.jsx under task folder
//? Download and save "on" and "off" image of bulb
//? Initially display "off" image on UI and take a btn and take conent as "SWITCH ON"
//? When you click on btn for 1st time change "off" image to "on" and in btn change the content as "SWITCH OFF"
//? When you click on btn for 2nd time change "on" image to "off" and in btn change the content as "SWITCH ON"
//This cycle should repeat --> toggle the content
//!Submit the code as well as output in pdf format

import React, { useState } from "react";
import bulb_on from "../assets/bulb_on.jpg";
import bulb_off from "../assets/bulb_off.jpg";

const ToggleBulb = () => {
  let [light, setLight] = useState(false);
  let changeLight = () => setLight(!light);
  return (
    <>
      <img src={light ? bulb_on : bulb_off} alt="" />
      <h1>{light ? "ON" : "OFF"}</h1>
      <button onClick={changeLight}>{light ? "OFF" : "ON"}</button>
    </>
  );
};

export default ToggleBulb;
