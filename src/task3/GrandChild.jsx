import React from "react";

const GrandChild = ({info3}) => {
    console.log(info3);

    let {institute,course,trainers} = info3

    let {frontend,backend} = course
    let [Chandana,Trainer1] = trainers

  return (
    <>
      <h1>{institute}</h1>
      <h2>Courses available: {frontend}, {backend}</h2>
      <h2>Trainers: {Chandana}, {Trainer1}</h2>
      <h3>
        Reactjs is handled by {Chandana} <br />
        Nodejs is handled by {Trainer1}
      </h3>
    </>
  );
};

export default GrandChild;
