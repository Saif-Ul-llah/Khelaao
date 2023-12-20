// upcoming matchs for umpire 
'use client'

import React, { useEffect, useState } from 'react';
import SideMenuBar from "../componets/SideMenuBar";
import useStore from "../store";
import { useRouter } from 'next/navigation';
import axios from "../utilis/axios"

const UpcomingMatches = () => {
  const {token ,setMatchData,userData}=useStore();
  const router = useRouter();
  const [matches,setmatches]=useState([]);

  // const { token ,userData} = useStore();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
const startMatch =(newMatchData)=>{
  router.push('/Toss')
  setMatchData(newMatchData);

}

  useEffect(()=>{
    const fetchMatch = async()=>{
      try {
        const response = await axios.get(`/player/playerMatchHistory`,config)
        // console.log(response.data.history)
        setmatches(response.data.history)
      } catch (error) {
        console.log(error);
      }
    }
    fetchMatch();
  },[])

  

  return (
    <div className="flex">
      <SideMenuBar />

      <div className="flex-grow flex flex-col justify-center items-center">
        <h2 className="md:text-3xl text-xl font-semibold mb-6">Upcoming Matches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-16 md:pl-64">
      {matches.map((match, index) => (
        <div
          key={index}
          onClick={() => startMatch(match)}
          className="bg-gray-500 p-6 rounded-md cursor-pointer shadow-md mb-4"
        >
          <h3 className="text-xl font-semibold mb-2">
            {match.teaminfo.map(team => team[0].name).join(' vs ')}
          </h3>
          <p className="text-white mb-2">
            <span className="font-semibold">Date:</span> {new Date(match._id.date).toDateString()}
          </p>
          <p className="text-white mb-2">
            <span className="font-semibold">Venue:</span> {match._id.venue}
          </p>
          <p className="text-white">
            <span className="font-semibold">Time:</span> {match._id.time}
          </p>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
};

export default UpcomingMatches;