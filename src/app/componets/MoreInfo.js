"use client";

import React, { useState } from "react";

const MoreInfo = () => {
  const [userData, setUserData] = useState({
    email: "",
    userInfo: {
      full_name: "",
      phone: "",
      address: {},
      dob: "",
      gender: "",
      Bio: "",
      role: "",
      img: "",
    },
  });
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState({
    userInfo: {
      img: "",
      Bio: "",
      role: "",
      full_name: "",
      phone: "",
      address: "",
      dob: "",
      gender: "",
    },
  });
  const [naddress, setaddress] = useState({
    street: "",
    city: "",
    country: "",
  });
  const handleFieldChange = (section, fieldName, value) => {
    if (fieldName == "dob") {
      userData.userInfo.address = naddress;
    }
    if (value == "male") {
      setGender("Male");
    }
    if (value == "female") {
      setGender("Female");
    }
    setUserData((prevState) => ({
      ...prevState,
      [section]: { ...prevState[section], [fieldName]: value },
    }));
  };
  const addressFieldChange = (fieldName, value) => {
    setaddress((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };
  const validateUserInformation = () => {
    const { full_name, phone, address, gender, dob, Bio, img, role } =
      userData.userInfo;
    const userInformationErrors = {
      full_name: full_name.trim() === "" ? "Full Name is required" : "",
      Bio: Bio.trim() === "" ? "Bio is required" : "",
      img: img.trim() === "" ? "Image is requied" : "",
      role: role.trim() === "" ? "Role is required" : "",
      gender: gender.trim() === "" ? "Please select an gender" : "",
      phone:
        phone.trim() === ""
          ? "Phone is required"
          : /^\d{11}$/.test(phone)
          ? ""
          : "Invalid phone number",
      // address: validateAddress(address) ? "" : "Address is incomplete",
      dob: dob === "" ? "Date of Birth is required" : "",
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
    validateUserInformation();
    // userData.email = email;
    // userData.userInfo.address = naddress;
    console.log("Form Data:", userData);
    // if (validateUserInformation()) {
    //   try {
    //     const response = await axios.post("/user/info", userData);
    //     // console.log(response)
    //     if (response.status == 200) {
    //       // alert("info add  ed");
    //       setresponesMessage(true);
    //     }
    //   } catch (error) {
    //     // console.log(error)
    //     seterrorMessage(true);

    //     // alert(error.response.data.message)
    //   }
    // }
  };

  return (
    <div>
      <div className="mx-auto  px-4 py-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-5 lg:grid-cols-5">
          <div className="rounded-lg float-right bg-gray-50 border-orange-500 border-2 sm:p-5 p-2 lg:col-span-4 lg:p-12">
            {/* Add a "Next" button to move to the next step */}

            <div class="bg-gray-50">
              <h1 className="font-extrabold text-orange-600 text-2xl">
                Additional Info
              </h1>
              <div class="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
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
                        value={userData.userInfo.full_name}
                        onChange={(e) =>
                          handleFieldChange(
                            "userInfo",
                            "full_name",
                            e.target.value
                          )
                        }
                      />
                      <div className="text-red-500 text-sm">
                        {errors.userInfo.full_name}
                      </div>
                    </div>
                    <div>
                      <label class="sr-only" for="Bio">
                        Bio
                      </label>
                      <input
                        class="w-full rounded-lg border-2 border-orange-200 p-3 text-sm"
                        placeholder="Bio"
                        type="text"
                        id="Bio"
                        value={userData.userInfo.Bio}
                        onChange={(e) =>
                          handleFieldChange("userInfo", "Bio", e.target.value)
                        }
                      />
                      <div className="text-red-500 text-sm">
                        {errors.userInfo.Bio}
                      </div>
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
                        value={userData.userInfo.phone}
                        onChange={(e) =>
                          handleFieldChange("userInfo", "phone", e.target.value)
                        }
                      />
                      <div className="text-red-500 text-sm">
                        {errors.userInfo.phone}
                      </div>
                    </div>
                    <div className="text-orange-700">
                      {/* <label className="text-gray-500">Upload Image:</label> */}
                      <input
                        type="file"
                        accept="image/*"
                        name="img"
                        value={userData.img}
                        onChange={(e) =>
                          handleFieldChange(
                            "userInfo",
                            "img",
                            e.currentTarget.files[0]
                          )
                        }
                        className="w-full p-2  rounded-md border  bg-white border-orange-300"
                      />
                      <div className="text-red-500 text-sm">
                        {errors.userInfo.img}
                      </div>
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
                        onChange={(e) =>
                          handleFieldChange("userInfo", "gender", "male")
                        }
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
                          handleFieldChange("userInfo", "gender", "female")
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
                      {errors.userInfo.gender}
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
                        id="dob"
                        value={userData.userInfo.dob}
                        onChange={(e) =>
                          handleFieldChange("userInfo", "dob", e.target.value)
                        }
                      />
                      <div className="text-red-500 text-sm">
                        {errors.userInfo.dob}
                      </div>
                    </div>
                    <div className="">
                      <label className="text-gray-500">Role :</label>
                      <select
                        className="w-full rounded-lg border-2 border-orange-200 p-3 text-sm"
                        id="role"
                        onChange={(e) =>
                          handleFieldChange("userInfo", "role", e.target.value)
                        }
                      >
                        <option value="">Select Role</option>
                        <option value="Player">Player</option>
                        <option value="Umpire">Umpire</option>
                      </select>
                      <div className="text-red-500 text-sm">
                        {errors.userInfo.role}
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
    </div>
  );
};

export default MoreInfo;
