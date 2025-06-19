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
