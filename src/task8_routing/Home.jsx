import React from "react";
import image from "../assets/college.jpg";
import '../global.css'

const Home = () => {
  return (
    <>
      <div className="home">
        <h1>Welcome to college</h1>
        <img src={image} alt="" />
      </div>
    </>
  );
};

export default Home;
