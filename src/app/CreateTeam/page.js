"use client";

import React, { useEffect, useState } from "react";
import SideMenuBar from "../componets/SideMenuBar";
import axios from "../utilis/axios";
import useStore from "../store";

const CreateTeam = () => {
  const { userData, token, setMatchData } = useStore();
  // const {teamId,setTeamId}=useState("");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  // let data = localStorage.getItem();
  let captainId = userData.id;

  const [step, setStep] = useState(1);
  const [teamData, setTeamData] = useState({
    name: "",
    abbreviation: "",
    image: null,
    description: "",
    captain: captainId,
    playerId: [],
    sports: "",
  });
  const [teamId ,setTeamId]=useState("")

  const [players, setplayers] = useState([]);
  // const get = async () => {
  //   try {
  //     const response = await axios.get(
  //       "/player/getPlayersForInvitation",
  //       config,
  //       teamId,
  //     );
  //     setplayers(response.data.players);
  //     // console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const renderForm = () => {
    switch (step) {
      case 1:
        return Form();
      case 2:
        return Player();

      default:
        return Form();
    }
  };
  const handleFieldChange = (fieldName, value) => {
    if (fieldName === "playerId") {
      setTeamData((prevState) => ({
        ...prevState,
        [fieldName]: [...prevState[fieldName], value],
      }));
    } else {
      setTeamData((prevState) => ({
        ...prevState,
        [fieldName]: value,
      }));
    }
    // console.log(`Player ${fieldName} selected: ${value}`);
    // console.log(teamData);
  };

  const handleImage = (e) => {
    const newValue = e.target.value;
    setTeamData((prevState) => ({
      ...prevState,
      image: newValue,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(captainId);
    try {
      const response = await axios.post(`/team/team/`, teamData, config);
      // console.log(response);
      if (response) {
        // setTeamId(response.createdTeam._id);
        // console.log(response.data.createdTeam._id);
        setTeamId(response.data.createdTeam._id);
        let teamId = response.data.createdTeam._id;
        try {
          const respon = await axios.post(
            `/player/getPlayersForInvitation/${teamId}`,
            teamId,
            config
          );
          setplayers(respon.data.players);
          // console.log(response);
        } catch (error) {
          console.log(error);
        }
        setStep(step + 1);
      }
    } catch (error) {
      console.log(error);
    }
    console.log(teamData);
  };

  const sendInvitation = async () => {
    console.log(teamData.playerId);
    console.log("Team ID : ",teamId);
    try {
      const response = await axios.post(`/team/teamInvitation/${teamId}`,teamData.playerId,config)
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  const Form = () => {
    return (
      <div>
        <div class="grid gap-x-16 gap-y-10">
          <div className="grid grid-cols-1 gap-2 text-center sm:grid-cols-2">
            {/* Team Name */}
            <div>
              <label class="sr-only " for="name">
                Team Name
              </label>
              <input
                class="w-full rounded-lg border-2 p-3 text-sm"
                placeholder="Team Name"
                type="text"
                id="name"
                value={teamData.name}
                onChange={(e) => handleFieldChange("name", e.target.value)}
              />
              <div className="text-red-500 text-sm">
                {/* {errors.userInfo.full_name} */}
              </div>
            </div>
            {/* Abbrevation */}
            <div>
              <label class="sr-only" for="Abbrevation">
                Abbrevation
              </label>
              <input
                class="w-full rounded-lg border-2   p-3 text-sm"
                placeholder="Abbrevation"
                type="text"
                id="Abbrevation"
                value={teamData.abbreviation}
                onChange={(e) =>
                  handleFieldChange("abbreviation", e.target.value)
                }
              />
              <div className="text-red-500 text-sm">
                {/* {errors.userInfo.Bio} */}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 text-center sm:grid-cols-2">
            {/* Sports */}
            <div className="-mt-7">
              <label className="text-gray-500">Sports :</label>
              <select
                className="w-full rounded-lg border-2   p-3 text-sm"
                id="role"
                value={teamData.sports}
                onChange={(e) => handleFieldChange("sports", e.target.value)}
              >
                <option value="">Select Sport</option>
                <option value="Player">Circket</option>
                <option value="Umpire">Football</option>
              </select>
              <div className="text-red-500 text-sm">
                {/* {errors.userInfo.role} */}
              </div>
            </div>
            {/* Description */}
            <div className="-mt-1">
              <label class="sr-only" for="Description">
                Description
              </label>
              <input
                class="w-full rounded-lg border-2   p-3 text-sm"
                placeholder="Description"
                type="text"
                id="Description"
                value={teamData.description}
                onChange={(e) =>
                  handleFieldChange("description", e.target.value)
                }
              />
              <div className="text-red-500 text-sm">
                {/* {errors.userInfo.Bio} */}
              </div>
            </div>
          </div>
          {/* image Upload */}
          <div className="-mt-5">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="user_avatar"
            >
              Upload image
            </label>
            <input
              class="flex p-3 w-full file:bg-orange-500 file:rounded-lg file:p-3 file:text-white file:border-none text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              type="file"
              // value={teamData.image}
              onChange={handleImage}
            />
          </div>
        </div>
        {/* button for submit */}
        <div className="mt-5 float-right">
          <button
            type="button"
            onClick={submitHandler}
            className="inline-block w-full rounded-lg bg-orange-500 px-5 py-3 font-medium text-white sm:w-auto"
          >
            Submit
          </button>
        </div>
      </div>
    );
  };
  const Player = () => {
    return (
      <div>
        <div>
          {/* player Table */}
          <div>
            <table class="min-w-full table-auto">
              <thead class="justify-center">
                <tr class="bg-orange-600">
                  <th class="px-10 py-2">
                    <span class="text-white">Image</span>
                  </th>
                  <th class="px-10 py-2">
                    <span class="text-white">Name</span>
                  </th>

                  <th class="px-10 py-2">
                    <span class="text-white">Role</span>
                  </th>

                  <th class="px-10 py-2">
                    <span class="text-white">Select</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-200">
                {players.map((player) => (
                  <tr
                    key={player.playerId}
                    className="bg-white border-4 border-gray-200"
                  >
                    <td className="px-10 py-2 flex flex-row items-center">
                      <img
                        className="h-8 w-8 rounded-full object-cover "
                        src={`https://randomuser.me/api/portraits/men/${10}.jpg`}
                        alt=""
                      />
                    </td>
                    <td>
                      <span className="text-center ml-2 font-semibold">
                        {player.fullName}
                      </span>
                    </td>
                    <td className="px-10 py-2">
                      <span>{player.playingRole}</span>
                    </td>
                    <td className="px-10 py-2">
                      <label>
                        <input
                          type="checkbox"
                          value={player.playerId}
                          className="peer hidden"
                          name="playerId"
                          onClick={(e) =>
                            handleFieldChange("playerId", e.target.value)
                          }
                        />
                        <div className="hover:bg-gray-50 flex items-center justify-between border-2 rounded-lg cursor-pointer text-sm border-gray-200 group">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-9 h-9 text-orange-500 invisible group-[.peer:checked+&]:visible"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* button for submit */}
            <div className="mt-5 float-right">
              <button
                type="button"
                onClick={sendInvitation}
                className="inline-block w-full rounded-lg bg-orange-500 px-5 py-3 font-medium text-white sm:w-auto"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-screen ">
      <SideMenuBar />
      <div>
        <div className="ml-16 md:ml-80 ">
          <div className="mx-auto  px-4 py-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-5 lg:grid-cols-5">
              <div className=" float-right bg-gray-50  border-2 sm:p-5 p-2 lg:col-span-4 lg:p-12">
                {/* Add a "Next" button to move to the next step */}

                <div class="bg-gray-50">
                  <h1 className="font-extrabold text-orange-600 md:text-2xl">
                    Create a New Team !
                  </h1>
                  <div class="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
                    {renderForm()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTeam;
