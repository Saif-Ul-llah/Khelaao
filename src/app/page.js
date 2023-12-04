"use client";

import React from "react";
import Live from "./home/page";
// import Login from "./login/page";
// import { ZustandProvider } from "zustand";
// import { SessionProvider } from "next-auth/react"

const Home = () => {
  return (
    <div>
      {/* <SessionProvider>
        <Login />
      </SessionProvider> */}
    
    {/* <ZustandProvider> */}
      <Live />
      
      {/* </ZustandProvider> */}
 
    </div>
  );
};

export default Home;
