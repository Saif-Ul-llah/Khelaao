// TossScreen

"use client";

import React, { useState } from 'react';
import SideMenuBar from '../componets/SideMenuBar';
import { useRouter } from 'next/navigation';
import useStore from '../store';

const TossScreen = () => {
    const router = useRouter();
  const [tossWinner, setTossWinner] = useState('');
  const [tossDecision, setTossDecision] = useState('');
  const{MatchData}=useStore();
  console.log(MatchData)
  // console.log(MatchData.teaminfo.map(team => team[0].name).join(' vs '));

  const handleTossWinnerChange = (team) => {
    setTossWinner(team);
  };

  const handleTossDecisionChange = (decision) => {
    setTossDecision(decision);
  };

  const handleSubmit = () => {
    // Handle the toss result, e.g., send data to the server
    console.log('Toss Result:', {
      tossWinner,
      tossDecision,
    });
    let Toss= {
      tossWinner,
      tossDecision,
    }
    localStorage.setItem("toss",JSON.stringify(Toss));
    router.push("/Score")
  };

  return (
    <div className="flex h-full">
      <SideMenuBar />

      <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-md shadow-md w-96">
          <h2 className="text-3xl font-bold mb-4 text-orange-600">Cricket Toss</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Toss Winner:</label>
            <div className="flex items-center space-x-4">
              <button
                className={`py-2 px-4 w-1/2 rounded-md ${
                  tossWinner === MatchData?.teaminfo[0][0].name ? 'bg-orange-500 text-white' : 'bg-gray-200'
                }`}
                onClick={() => handleTossWinnerChange(MatchData?.teaminfo[0][0].name)}
              >
               {MatchData?.teaminfo[0][0].name}
              </button>
              <button
                className={`py-2 px-4 w-1/2 rounded-md ${
                  tossWinner === MatchData?.teaminfo[1][0].name ? 'bg-orange-500 text-white' : 'bg-gray-200'
                }`}
                onClick={() => handleTossWinnerChange(MatchData?.teaminfo[1][0].name)}
              >
                {MatchData?.teaminfo[1][0].name}
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Toss Decision:</label>
            <div className="flex items-center space-x-4">
              <button
                className={`py-2 px-4 w-1/2 rounded-md ${
                  tossDecision === 'Bat' ? 'bg-orange-500 text-white' : 'bg-gray-200'
                }`}
                onClick={() => handleTossDecisionChange('Bat')}
              >
                Bat
              </button>
              <button
                className={`py-2 px-4 w-1/2 rounded-md ${
                  tossDecision === 'Bowl' ? 'bg-orange-500 text-white' : 'bg-gray-200'
                }`}
                onClick={() => handleTossDecisionChange('Bowl')}
              >
                Bowl
              </button>
            </div>
          </div>

          <button
            className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={handleSubmit}
          >
            Submit Toss
          </button>
        </div>
      </div>
    </div>
  );
};

export default TossScreen;