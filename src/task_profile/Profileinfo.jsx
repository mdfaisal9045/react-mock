//! Execute it in "react-mock"
//    Create "ProfileInfo.jsx"
// send data from  "ProfileInfo.jsx" to "MyProfile.jsx"
// let frontend=["html","reactjs","css","js"]   let backend=["nodejs","python"]
//  let database= {db1:"sql",db2:"mongodb"}
// !send all these 3 variable under the same propname "information"[wrap inside obj]
//  information= {{frontend,backend,database}}


import React from "react";
import MyProfile from "./MyProfile";

const Profileinfo = () => {
  let frontend = ["html", "reactjs", "css", "js"];
  let backend = ["nodejs", "python"];
  let database = { db1: "sql", db2: "mongodb" };
  return (
    <>
      <MyProfile information={{frontend, backend, database}} />
    </>
  );
};

export default Profileinfo;
