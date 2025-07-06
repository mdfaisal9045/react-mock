//!Task 7 : Fetch the data using axios
//? api--> https://api.github.com/users
//? fetch these data and display it in the "form of table"--> 1)id 2)login 3)avatar_url(img)
//* apply same colors for alternative rows..

import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

const AxiosLibrary = () => {
  let [user, setUser] = useState([]);

  let api = "https://api.github.com/users";

  let taskSeven = async () => {
    let { data } = await axios.get(api);
    setUser(data);
  };
  console.log("user:", user);

  useEffect(() => {
    try {
      taskSeven();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
    <table border="1" cellPadding="10" cellSpacing="0">
      <thead>
        <tr>
          <th>id</th>
          <th>login</th>
          <th>image</th>
        </tr>
      </thead>

      <tbody>
        {user.map((val,index)=>{
          console.log("curreny val: ",val)
          return(
            <Fragment key={val.id}>
              <tr style={{backgroundColor:index%2===0?"red":"yellow"}}>
                <td>{val.id}</td>
                <td>{val.login}</td>
                <td><img src={val.avatar_url} alt="" height="50px" width="50px"/></td>
              </tr>
            </Fragment>
          )
        })}
      </tbody>
    </table>
    </>
  )
};

export default AxiosLibrary;
