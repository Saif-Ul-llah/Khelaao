"use client";

import React, { useEffect, useState } from "react";
import SideMenuBar from "../componets/SideMenuBar";
import axios from "../utilis/axios";
import useStore from "../store";
import { useRouter } from "next/navigation";

const CreateMatch = () => {
  const [step, setStep] = useState(1);
  const router = useRouter()
  const [matchData, setMatchData] = useState({
    team1: "",
    team2: "",
    date: "",
    venue: "",
    time: "",
  });
  const [teams, setTeams] = useState([]);
  const [myTeams,setMyTeams]=useState([]);
  const { token ,userData} = useStore();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const fetchTeams = async () => {
    try {
      let response = await axios.get("/team/team", config);
      setTeams(response.data.findTeams);
      // console.log(response.data.findTeams);
    } catch (error) {
      console.log(error);
    }
    // try {
    //   let response = await axios.get(`/player/getPlayerTeamData/`, config);
    //   // setMyTeams(response.data);
    //   console.log(response);
    // } catch (error) {
      
    // }
  };
  useEffect(() => {
    fetchTeams();
  }, []);
  const nextStep = () => {
    setStep(step + 1);
  };

  // const prevStep = () => {
  //   setStep(step - 1);
  // };

  const handleFieldChange = (fieldName, value) => {
    setMatchData((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
    console.log(matchData);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(config);
    try {
      const response = await axios.post(`/match/match/${matchData.team1}`,matchData,config);
      if (response) {
        router.push("/dashboard");
        setStep(step-1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const TeamSelection = () => {
    return (
      <div>
        <div className="grid gap-x-16 gap-y-10">
          <div className="grid gap-x-16 gap-y-10 mt-[-10px]">
            <div>
              <label className="sr-only" htmlFor="team1">
                Select Your Team
              </label>
              <select
                className="w-full rounded-lg border-2 p-3 text-lg"
                id="team1"
                value={matchData.team1}
                onChange={(e) => handleFieldChange("team1", e.target.value)}
              >
                <option value="">Select Your Team</option>
                {teams.map((team, index) => (
                  <option key={index} value={team._id}>
                    {team.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="sr-only" htmlFor="team2">
                Select Opponent Team
              </label>
              <select
                className="w-full rounded-lg border-2 p-3 text-lg"
                id="team2"
                value={matchData.team2}
                onChange={(e) => handleFieldChange("team2", e.target.value)}
              >
                <option value="">Select Opponent Team</option>
                {teams.map((team, index) => (
                  <option key={index} value={team._id}>
                    {team.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="sr-only" htmlFor="team2">
                Select Umpire
              </label>
              <select
                className="w-full rounded-lg border-2 p-3 text-lg"
                id="Select_Umpire"
                value={matchData.team2}
                onChange={(e) => handleFieldChange("team2", e.target.value)}
              >
                <option value="">Select Umpire</option>
                {teams.map((team, index) => (
                  <option key={index} value={team._id}>
                    {team.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <button
            type="button"
            onClick={nextStep}
            className="float-right inline-block w-full rounded-lg bg-orange-500 px-5 py-3 font-medium text-white sm:w-auto"
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  const MatchDetails = () => {
    return (
      <div>
        <div className="grid gap-x-16 gap-y-10">
          <div className="grid gap-x-16 gap-y-10 mt-[-10px]">
            <div>
              <label className="sr-only" htmlFor="date">
                Date
              </label>
              <input
                className="w-full rounded-lg border-2 p-3 text-sm"
                placeholder="Date"
                type="date"
                id="date"
                value={matchData.date}
                onChange={(e) => handleFieldChange("date", e.target.value)}
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="venue">
                Venue
              </label>
              <select
                className="w-full rounded-lg border-2 p-3 text-sm"
                id="venue"
                value={matchData.venue}
                onChange={(e) => handleFieldChange("venue", e.target.value)}
              >
                <option value="">Select Venue</option>
                <option value="Johar">Johar</option>
                <option value="Gulshan">Gulshan</option>
                <option value="Pechs">Pechs</option>
                <option value="Bahadurabad">Bahadurabad</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 text-center sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="time">
                time
              </label>
              <select
                className="w-full rounded-lg border-2 p-3 text-sm"
                id="time"
                value={matchData.time}
                onChange={(e) => handleFieldChange("time", e.target.value)}
              >
                <option value="">Select time</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </select>
            </div>
          </div>
        </div>

        {/* button for submit */}
        <div className="mt-5 float-right">
              <button
                type="button"
                onClick={submitHandler}
                className="inline-block w-full rounded-lg bg-orange-500 px-5 py-3 font-medium text-white sm:w-auto"
              >
                Create Match
              </button>
            </div>
      </div>
    );
  };

  const renderForm = () => {
    switch (step) {
      case 2:
        return <TeamSelection />;
      case 1:
        return <MatchDetails />;
      default:
        return <TeamSelection />;
    }
  };

  return (
    <div className="w-screen">
      <SideMenuBar />
      <div>
        <div className="ml-16 md:ml-80">
          <div className="mx-auto px-4 py-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-5 lg:grid-cols-5">
              <div className="float-right bg-gray-50 border-2 sm:p-5 p-2 lg:col-span-4 lg:p-12">
                <div className="bg-gray-50">
                  <h1 className="font-extrabold text-orange-600 md:text-2xl">
                    Create a New Match!
                  </h1>
                  <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
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

export default CreateMatch;
