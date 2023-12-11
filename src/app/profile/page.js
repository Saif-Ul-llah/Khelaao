// UserProfile.js
"use client";
import React from "react";
import SideMenuBar from "../componets/SideMenuBar";
import useStore from "../store";

const Profile = () => {
  // Dummy data for the player
  const { userData } = useStore();
  const playerData = {
    name: userData.fullName || " ",
    role: "All-rounder",
    matchesPlayed: 150,
    age: 28,
    score: 5000,
    points: 1200,
  };

  return (
    <div className="user-profile-container flex justify-center  h-screen bg-gray-100">
      <SideMenuBar />
      <div className="user-profile p-8 bg-white mt-4 ml-16 md:ml-48 h-2/3 rounded-lg shadow-md max-w-2xl w-full">
        <div className="flex justify-center">
          <img
            src="https://placekitten.com/200/200" // Replace with the player's profile picture
            alt="Player Profile"
            className="profile-picture w-32 h-32 rounded-full mb-4"
          />
        </div>
        <div className="user-info text-center">
          <h2 className="text-2xl font-bold mb-2">{playerData.name}</h2>
          <p className="text-lg text-gray-600 mb-4">{playerData.role}</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex gap-10">
              <div className="flex justify-center ">
                <div className="flex items-center justify-start px-3 m-2 rounded-full h-14 w-14 bg-gray-100 border-2 border-gray-300">
                  <p>{playerData.matchesPlayed}</p>
                </div>
                <p className="text-sm text-gray-600 flex items-center justify-start">
                  <strong>Matches Played</strong>
                </p>
              </div>
              <div className="flex justify-center ">
                <div className="flex items-center justify-start m-2 px-3 rounded-full h-14 w-14 bg-gray-100 border-2 border-gray-300">
                  <p> {playerData.age}</p>
                </div>
                <p className="text-sm text-gray-600 flex items-center justify-start">
                  <strong>Age</strong>
                </p>
              </div>
            
              <div className="flex justify-center ">
                <div className="flex items-center justify-start px-3 m-2 rounded-full h-14 w-14 bg-gray-100 border-2 border-gray-300">
                  <p>{playerData.score}</p>
                </div>
                <p className="text-sm text-gray-600 flex items-center justify-start">
                  <strong>Score</strong>
                </p>
              </div>
              <div className="flex justify-center ">
                <div className="flex items-center justify-start m-2 px-3 rounded-full h-14 w-14 bg-gray-100 border-2 border-gray-300">
                  <p> {playerData.points}</p>
                </div>
                <p className="text-sm text-gray-600 flex items-center justify-start">
                  <strong>Points</strong>
                </p>
              </div>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
