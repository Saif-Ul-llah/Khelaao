import React from "react";
import SideMenuBar from "../componets/SideMenuBar";

const UmpireHome = () => {
  const boilerplateList = [
    "Boilerplate 1",
    "Boilerplate 2",
    "Boilerplate 3",
    // Add more boilerplates as needed
  ];
  return (
    <div>
      <SideMenuBar />
      <div className="ml-16 md:ml-64 p-4">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 mt-2  mx-auto w-full">
          <div className="flex cursor-pointer hover:bg-white hover:text-gray-500 justify-center items-center font-bold text-3xl w-full h-16 border-2 border-gray-500 rounded-lg bg-gray-500 text-white">
            6
          </div>
          <div className="flex cursor-pointer hover:bg-white hover:text-gray-500 justify-center items-center font-bold text-3xl w-full h-16 border-2 border-gray-500 rounded-lg bg-gray-500 text-white">
            4
          </div>
          <div className="flex cursor-pointer hover:bg-white hover:text-gray-500 justify-center items-center font-bold text-3xl w-full h-16 border-2 border-gray-500 rounded-lg bg-gray-500 text-white">
            3
          </div>
          <div className="flex cursor-pointer hover:bg-white hover:text-gray-500 justify-center items-center font-bold text-3xl w-full h-16 border-2 border-gray-500 rounded-lg bg-gray-500 text-white">
            2
          </div>
          <div className="flex cursor-pointer hover:bg-white hover:text-gray-500 justify-center items-center font-bold text-3xl w-full h-16 border-2 border-gray-500 rounded-lg bg-gray-500 text-white">
            1
          </div>
          <div className="flex cursor-pointer hover:bg-white hover:text-gray-500 justify-center items-center font-bold text-3xl w-full h-16 border-2 border-gray-500 rounded-lg bg-gray-500 text-white">
            Zero
          </div>
          <div className="flex cursor-pointer hover:bg-white hover:text-gray-500 justify-center items-center font-bold text-3xl w-full h-16 border-2 border-gray-500 rounded-lg bg-gray-500 text-white">
            Wicket
          </div>
          <div className="flex cursor-pointer hover:bg-white hover:text-gray-500 justify-center items-center font-bold text-3xl w-full h-16 border-2 border-gray-500 rounded-lg bg-gray-500 text-white">
            NO Ball
          </div>
        </div>
        <div>
          <label className="sr-only" htmlFor="team1">
            Select Baller
          </label>
          <select
            className="w-full rounded-lg mt-2 border-2 p-3 text-lg"
            id="team1"
            // value={''}
            // onChange={(e) => handleFieldChange("team1", e.target.value)}
          >
            <option value="">Select Baller</option>
            {boilerplateList.map((team, index) => (
              <option key={index} value={boilerplateList[index]}>
                {boilerplateList[index]}
              </option>
            ))}
          </select>
        </div>
        <div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-3 py-3">
                    Ball
                  </th>
                  <th scope="col" class="px-2 py-3">
                    TO
                  </th>
                  <th scope="col" class="px-2 py-3">
                    Score
                  </th>
                  <th scope="col" class="px-2 py-3 text-right">
                    <span class="">Update</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                  11
                  </th>
                  <td class="px-2 py-4">Ali</td>
                  <td class="px-2 py-4">2</td>
                  <td class="px-2 py-4 text-right">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    10
                  </th>
                  <td class="px-2 py-4">Haroon hammad</td>
                  <td class="px-2 py-4">6</td>
                  <td class="px-2 py-4 text-right">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UmpireHome;
