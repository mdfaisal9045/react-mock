import React from "react";
import style from './task1.module.css'

const MyProfile = ({ inst = {}, children }) => {
  console.log("institute props:", inst);
  console.log("children props:", children);

  let {
    iname,
    mode,
    fees,
    course,
    rating = 0,
    duration = "4months",
    photo1,
    photo2,
  } = inst;
  return (
    <>
      <div className={style.container}>
        <h1 id={style.heading}>{iname}</h1>
        <img
          src={photo1}
          alt=""
          height={200}
          width={200}
          className={style.image}
        />
        <img
          src={photo2}
          alt=""
          height={200}
          width={200}
          className={style.image}
        />
        <h3 className={style.details}>
          Course: {course} <br />
          Duration: {duration} <br />
          Fees: Rs.{fees} <br />
          Mode: {mode} <br />
          Rating: {rating} <br />
        </h3>
        <div className={style.children}>
        {children}
        </div>
      </div>
    </>
  );
};

export default MyProfile;
