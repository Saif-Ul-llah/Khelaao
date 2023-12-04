"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const router = useRouter();

  return (
    <div>
      <nav class="bg-white border-gray-200 border-b-4  dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/khelaao22.png" class="h-8" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Khelaao
            </span>
          </a>
          <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <div
              onClick={() => {
                router.push("/login");
              }}
              class="text-sm border-2 cursor-pointer rounded-lg p-2 border-orange-400 text-orange-600 dark:text-orange-500 hover:underline"
            >
              Login
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

// Export the Navbar component
export default Navbar;
