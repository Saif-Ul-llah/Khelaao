"use client";

import React, { useState } from "react";
import axios from "../utilis/axios";
import useStore from "../store";

const MoreInfo = () => {
  const [modal, setModal] = useState(false);
  const [playingRole, setplayingRole] = useState("");
  const [WindowOpen, setWindowOpen] = useState(true);
  const handleplayingRoleChange = (type) => {
    setplayingRole(type);
  };

  let userId = useStore((state) => state.userData);
  let token = useStore((state) => state.token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const [userData, setUserData] = useState({
    emailAddress: userId.emailAddress,
    full_name: "",
    phone: "",
    address: {},
    dateOfBirth: "",
    gender: "",
    bio: "",
    role: "",
    img: "",
  });
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState({
    img: "",
    bio: "",
    role: "",
    full_name: "",
    phone: "",
    address: "",
    dateOfBirth: "",
    gender: "",
  });
  const [naddress, setaddress] = useState({
    street: "",
    city: "",
    country: "",
  });
  const handleFieldChange = (fieldName, value) => {
    if (fieldName == "dateOfBirth") {
      userData.address = `${naddress.street}, ${naddress.city}, ${naddress.country}`;
    }
    if (value == "male") {
      setGender("Male");
    }
    if (value == "female") {
      setGender("Female");
    }
    setUserData((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };
  const addressFieldChange = (fieldName, value) => {
    setaddress((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };
  const validateUserInformation = () => {
    const { full_name, phone, address, gender, dateOfBirth, bio, img, role } =
      userData;
    const userInformationErrors = {
      full_name: full_name.trim() === "" ? "Full Name is required" : "",
      bio: bio.trim() === "" ? "Bio is required" : "",
      img: img === "" ? "Image is requied" : "",
      role: role.trim() === "" ? "Role is required" : "",
      gender: gender.trim() === "" ? "Please select an gender" : "",
      phone:
        phone.trim() === ""
          ? "Phone is required"
          : /^\d{11}$/.test(phone)
          ? ""
          : "Invalid phone number",
      // address: validateAddress(address) ? "" : "Address is incomplete",
      dateOfBirth: dateOfBirth === "" ? "Date of Birth is required" : "",
      gender: gender === "" ? "Gender is required" : "",
    };
    setErrors((prevErrors) => ({
      ...prevErrors,
      userInfo: userInformationErrors,
    }));
    return Object.values(userInformationErrors).every((error) => error === "");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(token);
    // setUserData({emailAddress: userId.emailAddress})
    // console.log("Form Data:", userData);
    if (validateUserInformation()) {
      try {
        const response = await axios.put(
          `/user/updateUserInfo/${userId.id}`,
          userData,
          config
        );

        // console.log(response)
        if (response) {
          // alert("info added");
          setModal(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
    // onSubmit();
  };
  const RoleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/player/createPlayer",
        { playingRole },
        config
      );
      console.log(response);
      if (response) {
        setModal(false);
        setWindowOpen(false);
      }
    } catch (error) {}
  };

  return (
    <div>
      {WindowOpen ? (
        <div className="mx-auto  px-4 py-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-5 lg:grid-cols-5">
            <div className="rounded-lg float-right bg-gray-50 border-orange-500 border-2 sm:p-5 p-2 lg:col-span-4 lg:p-12">
              {/* Add a "Next" button to move to the next step */}
              {/* modal for player Role */}
              <div class="bg-gray-50">
                <h1 className="font-extrabold text-orange-600 text-2xl">
                  Additional Info
                </h1>
                <div class="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
                  <div
                    id="default-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className={`${
                      modal ? "block" : "hidden"
                    } overflow-y-auto overflow-x-hidden fixed top-0 right-0 
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
                            Player Type: {playingRole}
                          </p>
                          {/* Radio buttons for player type */}
                          <div>
                            <input
                              type="radio"
                              id="batsman"
                              name="playingRole"
                              value="Batsman"
                              onChange={() =>
                                handleplayingRoleChange("Batsman")
                              }
                            />
                            <label htmlFor="batsman" className="ml-2">
                              Batsman
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              id="bowler"
                              name="playingRole"
                              value="Bowler"
                              onChange={() => handleplayingRoleChange("Bowler")}
                            />
                            <label htmlFor="bowler" className="ml-2">
                              Bowler
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              id="allRounder"
                              name="playingRole"
                              value="All-Rounder"
                              onChange={() =>
                                handleplayingRoleChange("All-Rounder")
                              }
                            />
                            <label htmlFor="allRounder" className="ml-2">
                              All-Rounder
                            </label>
                          </div>
                        </div>
                        {/* Modal footer */}
                        <div className="flex  p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                          <button
                            onClick={RoleSubmit}
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

                  <div class="grid gap-x-16 gap-y-14">
                    {/* name and Bio*/}
                    <div className="grid grid-cols-1 gap-2 text-center sm:grid-cols-2">
                      <div>
                        <label class="sr-only" for="name">
                          Name
                        </label>
                        <input
                          class="w-full rounded-lg border-2 border-orange-200 p-3 text-sm"
                          placeholder="Name"
                          type="text"
                          id="name"
                          value={userData.full_name}
                          onChange={(e) =>
                            handleFieldChange("full_name", e.target.value)
                          }
                        />
                        <div className="text-red-500 text-sm">
                          {errors.full_name}
                        </div>
                      </div>
                      <div>
                        <label class="sr-only" for="bio">
                          Bio
                        </label>
                        <input
                          class="w-full rounded-lg border-2 border-orange-200 p-3 text-sm"
                          placeholder="bio"
                          type="text"
                          id="bio"
                          value={userData.bio}
                          onChange={(e) =>
                            handleFieldChange("bio", e.target.value)
                          }
                        />
                        <div className="text-red-500 text-sm">{errors.bio}</div>
                      </div>
                    </div>
                    {/* {Phone no} and img */}
                    <div className="grid grid-cols-1 -mt-7 gap-2 text-center sm:grid-cols-2">
                      <div>
                        <label class="sr-only" for="phone">
                          Phone Number
                        </label>
                        <input
                          class="w-full rounded-lg border-2 border-orange-200 p-3 text-sm"
                          placeholder="Phone Number"
                          type="number"
                          id="phone"
                          value={userData.phone}
                          onChange={(e) =>
                            handleFieldChange("phone", e.target.value)
                          }
                        />
                        <div className="text-red-500 text-sm">
                          {errors.phone}
                        </div>
                      </div>
                      <div className="text-orange-700">
                        {/* <label className="text-gray-500">Upload Image:</label> */}
                        <input
                          type="file"
                          accept="image/*"
                          name="img"
                          // value={userData.img}
                          onChange={(e) =>
                            handleFieldChange("img", e.currentTarget.files[0])
                          }
                          className="w-full p-2  rounded-md border  bg-white border-orange-300"
                        />
                        <div className="text-red-500 text-sm">{errors.img}</div>
                      </div>
                    </div>
                    {/* gender */}
                    <div class="grid grid-cols-1 -mt-7 gap-2 text-center sm:grid-cols-2">
                      <div className="justify-center items-center ">
                        <input
                          class="peer sr-only"
                          id="male"
                          type="radio"
                          name="gender"
                          checked={gender === "Male"}
                          onChange={(e) => handleFieldChange("gender", "male")}
                        />
                        <label
                          for="male"
                          class="block w-full rounded-lg border border-orange-200 bg-white p-3 text-gray-600 hover:border-orange-500 peer-checked:border-orange-500 peer-checked:bg-orange-500 peer-checked:text-white"
                          tabindex="0"
                        >
                          <span class="text-sm"> Male </span>
                        </label>
                      </div>

                      <div>
                        <input
                          class="peer sr-only"
                          id="female"
                          type="radio"
                          name="gender"
                          checked={gender === "Female"}
                          onChange={(e) =>
                            handleFieldChange("gender", "female")
                          }
                        />
                        <label
                          for="female"
                          class="block w-full rounded-lg border border-orange-200 p-3 bg-white text-gray-600 hover:border-orange-500 peer-checked:border-orange-500 peer-checked:bg-orange-500 peer-checked:text-white"
                          tabindex="0"
                        >
                          <span class="text-sm"> Female </span>
                        </label>
                      </div>
                      <div className="text-red-500 text-sm">
                        {errors.gender}
                      </div>
                    </div>
                    {/* Address */}
                    <div class="grid grid-cols-1 -mt-12 gap-2 text-center sm:grid-cols-3">
                      <div>
                        <label class="sr-only" htmlFor="grid-street">
                          Street
                        </label>
                        <input
                          class="w-full rounded-lg border-2 border-orange-200 p-3 text-sm"
                          id="grid-street"
                          type="text"
                          placeholder="Street"
                          value={naddress.street}
                          onChange={(e) =>
                            addressFieldChange("street", e.target.value)
                          }
                        />
                        {/* <div className="text-red-500 text-sm">{errors.street}</div> */}
                      </div>
                      <div>
                        <label class="sr-only" htmlFor="grid-city">
                          City
                        </label>
                        <input
                          class="w-full rounded-lg border-2 border-orange-200 p-3 text-sm"
                          id="grid-city"
                          type="text"
                          placeholder="City"
                          value={naddress.city}
                          onChange={(e) =>
                            addressFieldChange("city", e.target.value)
                          }
                        />
                        {/* <div className="text-red-500 text-sm">{errors.city}</div> */}
                      </div>
                      <div>
                        <label class="sr-only" htmlFor="grid-country">
                          Country
                        </label>
                        <input
                          class="w-full rounded-lg border-2 border-orange-200 p-3 text-sm"
                          id="grid-country"
                          type="text"
                          placeholder="Country"
                          value={naddress.country}
                          onChange={(e) =>
                            addressFieldChange("country", e.target.value)
                          }
                        />
                        {/* <div className="text-red-500 text-sm">{errors.country}</div> */}
                      </div>
                    </div>
                    {/* Dob and Role */}
                    <div className="grid grid-cols-1 -mt-14 gap-2 text-center sm:grid-cols-2">
                      <div>
                        <label class="text-gray-500">Date of Birth :</label>
                        <input
                          class="w-full rounded-lg border-2 border-orange-200 p-3 text-sm"
                          placeholder="Date of Birth"
                          type="date"
                          id="dateOfBirth"
                          value={userData.dateOfBirth}
                          onChange={(e) =>
                            handleFieldChange("dateOfBirth", e.target.value)
                          }
                        />
                        <div className="text-red-500 text-sm">
                          {errors.dateOfBirth}
                        </div>
                      </div>
                      <div className="">
                        <label className="text-gray-500">Role :</label>
                        <select
                          className="w-full rounded-lg border-2 border-orange-200 p-3 text-sm"
                          id="role"
                          onChange={(e) =>
                            handleFieldChange("role", e.target.value)
                          }
                        >
                          <option value="">Select Role</option>
                          <option value="Player">Player</option>
                          <option value="Umpire">Umpire</option>
                        </select>
                        <div className="text-red-500 text-sm">
                          {errors.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="float-right inline-block w-full rounded-lg bg-orange-500 px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MoreInfo;
