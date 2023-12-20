"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useStore from "../store";
import axios from "../utilis/axios";
import SideMenuBar from "../componets/SideMenuBar";
import Loader from "../componets/loader";

const Notification = () => {
  const router = useRouter();
  const [teamInvit, setTeamInvite] = useState();
  const [matchInvite, setMatchInvite] = useState();
  const { userData, token, playerData } = useStore();
  const [load, setload] = useState(true);
  const [not, setnot] = useState(false);

  let user = userData?.fullName;
  // console.log(user);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const handleAccepted = async (id) => {
    try {
      const response = await axios.post(
        `/team/team/${id}/player/${userData.id}`
      );
      if (response) {
        // console.log(response);
        fetchTeamMessage();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDecline = async (id) => {
    try {
      const response = await axios.delete(
        `/player/declineInvitation/${id}`,
        config
      );
      if (response) {
        // console.log(response);
        fetchTeamMessage();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTeamMessage = async () => {
    try {
      const response = await axios.get("/player/allInvitations", config);
      // console.log(response);
      if (response.status == 200) {
        setTeamInvite(response.data.allInvitations);
        // console.log(response.data.allInvitations);
        if (response.data.allInvitations.length === 0) {
          setnot(true);
        }
        setload(false);
      }
    } catch (error) {
      setload(false);
      console.log(error);
    }
  };

  const fetchMatchMessage = async () => {
    try {
      const response = await axios.get(
        `/team/getAllMatchInvitations/${playerData.teamId[0]}`,
        config
      );
      console.log(response);
      if (response.status == 200) {
        setTeamInvite(response.data.allInvitations);
        console.log(response.data.allInvitations);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTeamMessage();
    if (userData?.role == "captain") {
      fetchMatchMessage();
    }
  }, []);
  return (
    <div>
      <SideMenuBar />
      {load ? (
        <Loader />
      ) : (
        <div className="ml-16 mt-2 md:ml-64">
          {teamInvit &&
            teamInvit.map((value) => (
              <div className="md:w-1/2 w-full border-2 border-orange-500 rounded-lg p-2 md:m-2">
                <h1 className="text-center font-bold">Team Invitation</h1>
                <h3>
                  <strong>Team Name :</strong> {value.name}
                </h3>
                <button
                  className="bg-white border-2 border-orange-500 rounded-lg p-2 m-2 text-orange-500 hover:bg-orange-100"
                  onClick={() => handleDecline(value._id)}
                >
                  Decline
                </button>
                <button
                  className="hover:bg-orange-400 bg-orange-500 rounded-lg p-2 m-2 text-white"
                  onClick={() => handleAccepted(value._id)}
                >
                  Agree
                </button>
              </div>
            ))}
          {not ? (
            <div className="w-full text-center h-full py-52 font-extrabold text-3xl text-red-600">
              No Invitation Found
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Notification;
