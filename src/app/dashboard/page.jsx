"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import SideMenuBar from "../componets/SideMenuBar";
import { RiTeamLine } from "react-icons/ri";
import MoreInfo from "../componets/MoreInfo";
import axios from "../utilis/axios";

const home = () => {
  const router = useRouter();
  const [state, setstate] = useState(true);
  
  // const [modal, setmodal] = useState(false);

  // useEffect(() => {
  //   CheckDetails();
  // }, []);
  // const CheckDetails = async () => {
  //   try {
  //     const response = await axios.post("", emailAddress);
  //     if (response) {
  //       setmodal(true);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="w-screen ">
      <SideMenuBar />

      <div className="ml-16 md:ml-64 ">
        {!state ? <MoreInfo /> : null}
        <section class="text-gray-600 body-font">
          <div class="container py-3 mx-auto">
            {/* {state ? ( */}
            <div class="flex flex-wrap ">
              {/* Create Team */}
              <div
                class="xl:w-1/3 md:w-1/2 p-2 cursor-pointer"
                onClick={() => {
                  {
                    // modal ? setstate(false) :  
                    router.push("/CreateTeam");
                  }
                  console.log("Create team button pressed!");
                }}
              >
                <div class="border border-orange-200 p-5 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-4">
                    <div className="flex justify-center items-center ">
                      <RiTeamLine className="h-6 w-6" />
                    </div>
                  </div>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    Create Team
                  </h2>
                  <p class="leading-relaxed text-base">
                    Strength in Unity, Success as Team
                  </p>
                </div>
              </div>
              {/* Matchs */}
              <div
                class="xl:w-1/3 md:w-1/2 p-2 cursor-pointer"
                onClick={() => {
                    router.push("/Match");

                  // console.log("Match button pressed!");
                }}
              >
                <div class="border border-orange-200 p-5 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-4">
                    <img src="/match.png" className="h-8 w-8" />
                  </div>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    Matchs
                  </h2>
                  <p class="leading-relaxed text-base">
                    Cricket matches: where heroes emerge.
                  </p>
                </div>
              </div>
              <div
                  class="xl:w-1/3 md:w-1/2 p-2 cursor-pointer"
                  onClick={() => {
                    setstate(false);
                  }}
                >
                  <div class="border border-orange-200 p-5 rounded-lg">
                    <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-4">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                      </svg>
                    </div>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                      More Info
                    </h2>
                    <p class="leading-relaxed text-base">
                      Fingerstache flexitarian street art 8-bit
                    </p>
                  </div>
                </div>
            </div>
            {/* ) : null} */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default home;
