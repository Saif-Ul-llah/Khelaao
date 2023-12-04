import React from "react";
import Navbar from "../componets/Navbar";

const Live = () => {
  const teamsScore = [
    {
      match: "Match One",
      teams: [
        {
          team: "Pakistan",
          score: 30, 
          out: 2,
          src: "https://cdn.britannica.com/46/3346-004-D3BDE016/flag-symbolism-Pakistan-design-Islamic.jpg",
        },
        {
          team: "India",
          score: 15,
          out: 3,
          src: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
        },
      ],
    },
    {
      match: "Match Two",
      teams: [
        {
          team: "India",
          score: 15,
          out: 3,
          src: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
        },
        {
          team: "Pakistan",
          score: 30,
          out: 2,
          src: "https://cdn.britannica.com/46/3346-004-D3BDE016/flag-symbolism-Pakistan-design-Islamic.jpg",
        },
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <section className="text-gray-600  body-font">
        <div className="container py-3 mx-auto">
          {teamsScore.map((match, matchIndex) => (
            <div className="flex flex-wrap" key={matchIndex}>
              <div className=" p-2 cursor-pointer">
                <div className=" border bg-gray-100 border-orange-200 p-5 rounded-lg">
                  <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex ">
                      {match.teams.map((data, teamIndex) => (
                        <>
                          <div
                            key={teamIndex}
                            className="p-4 rounded-md m-2 flex items-center border"
                          >
                            <div className="h-16 w-16 rounded-full overflow-hidden">
                              <img
                                src={data.src}
                                alt={`${data.team} Flag`}
                                className="h-16 w-full object-cover"
                              />
                            </div>
                            <div className="ml-4">
                              <h4 className="text-lg font-bold mb-1">
                                {data.team}
                              </h4>
                              <div className="flex">
                                <p className="mr-2">Score: {data.score} /</p>
                                <p>{data.out}</p>
                              </div>
                            </div>
                          </div>
                          {teamIndex === 0 && (
                            <div className="mt-8">
                              <h1 className="text-4xl font-bold">VS</h1>
                            </div>
                          )}
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Live;
