//!Task 7 : Fetch the data using axios
//? api--> https://api.github.com/users
//? fetch these data and display it in the "form of table"--> 1)id 2)login 3)avatar_url(img)
//* apply same colors for alternative rows..

import axios from "axios";
import React, { useEffect } from "react";


const AxiosLibrary = () => {

    let api = "https://api.github.com/users";

  let taskSeven = async () => {
    try { let res=await axios.get(api)
        console.log(res)
    } catch (error) {console.log(error);
    }
  };

  useEffect(() => {
    taskSeven();
  },[]);
  return <div>AxiosLibrary</div>;
};

export default AxiosLibrary;
