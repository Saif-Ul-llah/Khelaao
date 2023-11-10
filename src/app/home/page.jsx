"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const home = () => {
  const router = useRouter()
  return (
    <div>
      home
    <br/>
      <button
        onClick={() => {
          signOut();
          router.push("/login");
        }}
      >
        sign Out
      </button>
    </div>
  );
};

export default home;
