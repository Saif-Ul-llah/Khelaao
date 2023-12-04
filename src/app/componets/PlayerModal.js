// ModalComponent.js
"use client"
import React, { useState } from 'react';

const ModalComponent = () => {
  const [modal, setModal] = useState(false);
  const [playerType, setPlayerType] = useState('');



  const handlePlayerTypeChange = (type) => {
    setPlayerType(type);
  };

  return (
    <div>
      {/* Modal toggle */}
      <button
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setModal(true)}
      >
        Toggle modal
      </button>

      {/* Main modal */}
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`${modal ? 'block' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 
        left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className=" flex justify-center items-center p-4 w-screen bg-black bg-opacity-70  h-screen">
          {/* Modal content */}
          <div className="relative  bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex w-80 items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Your Role
              </h3>
              <button
                type="button"
                className="text-red-800 bg-transparent hover:bg-red-800 hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
                onClick={() => setModal(false)}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="flex flex-col p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Player Type: {playerType}
              </p>
              {/* Radio buttons for player type */}
              <div>
                <input
                  type="radio"
                  id="batsman"
                  name="playerType"
                  value="Batsman"
                  onChange={() => handlePlayerTypeChange('Batsman')}
                />
                <label htmlFor="batsman" className="ml-2">
                  Batsman
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="bowler"
                  name="playerType"
                  value="Bowler"
                  onChange={() => handlePlayerTypeChange('Bowler')}
                />
                <label htmlFor="bowler" className="ml-2">
                  Bowler
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="allRounder"
                  name="playerType"
                  value="All-Rounder"
                  onChange={() => handlePlayerTypeChange('All-Rounder')}
                />
                <label htmlFor="allRounder" className="ml-2">
                  All-Rounder
                </label>
              </div>
            </div>
            {/* Modal footer */}
            <div className="flex  p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                className="w-full bg-orange-600 hover:bg-orange-500 text-white font-medium 
                rounded-lg text-sm px-5 py-2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ModalComponent;