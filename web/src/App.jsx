import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
    <Navbar/>
    
      <Outlet />

      <footer>This is footer</footer>

      {/* <div className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          MERN Stack <span className="text-indigo-700">Job Portal</span> Starter
          Files
        </h1>
      </div> */}
    </>
  );
};

export default App;
