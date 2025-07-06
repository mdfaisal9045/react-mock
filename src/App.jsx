// import React from 'react'

// const App = () => {
//   let s = "Faisal"
//   return (
//     <>
//     <h2>name: {s}</h2>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import Profileinfo from './profile/Profileinfo'

// const App = () => {
//   return (
//     <>
//     <Profileinfo/>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import Parent from './task1/Parent'

// const App = () => {
//   return (
//     <div>
//       <Parent/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import GrandParent from './task3/GrandParent'

// const App = () => {
//   return (
//     <>
//     <GrandParent/>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import Profileinfo from './profile/Profileinfo'

// const App = () => {
//   return (
//     <>
//       <Profileinfo/>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import MyProfile from './task3_jsx+state+module/MyProfile'

// const App = () => {
//   return (
//     <div>
//       <MyProfile/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import ToggleBulb from './task4_toggle/ToggleBulb'

// const App = () => {
//   return (
//     <div>
//       <ToggleBulb/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import CounterContext from './task5_contextApi/CounterContext'
// import RegistrationForm from './task6_controlledform/RegistrationForm'
// import SignUp from './signupTask/SignUp'
import AxiosLibrary from './task7_axios/AxiosLibrary'

const App = () => {
  return (
    <div>
      {/* <CounterContext/> */}
      {/* <RegistrationForm/> */}
      {/* <SignUp/> */}
      <AxiosLibrary/>
    </div>
  )
}

export default App

// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from "./task8_routing/Layout";
// import Home from "./task8_routing/Home";
// import Contact from "./task8_routing/Contact";
// import Events from "./task8_routing/Events";
// import Courses from "./task8_routing/Courses";
// import Placements from './task8_routing/Placements';
// import PageNotFound from "./task8_routing/PageNotFound";

// let routing = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "/contact", element: <Contact /> },
//       { path: "/events", element: <Events /> },
//       { path: "/courses", element: <Courses /> },
//       { path: "/placements", element: <Placements /> },
//       { path: "*", element: <PageNotFound/> },
//     ],
//   },
// ]);

// const App = () => {
//   return (
//     <>
//       <RouterProvider router={routing}/>
//     </>
//   );
// };

// export default App;
