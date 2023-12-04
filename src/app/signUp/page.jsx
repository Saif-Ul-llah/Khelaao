"use client";
import Image from "next/image";
import React, { useState } from "react";
import axios from "../utilis/axios"
import { useRouter } from "next/navigation";

const SignUp = () => {
const router= useRouter();

  const [formData, setformData] = useState({
    fullName: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
  });

  const validatfullName = (fullName) => {
    return fullName ? "" : "Full Name is requiredF";
  };
  const validateemailAddress = (emailAddress) => {
    return emailAddress ? "" : "emailAddress is required";
  };
  const validatePassword = (password) => {
    // Add your password validation logic here
    return password ? "" : "Password is required";
  };
  const validateConfirmPassword = (confirmPassword) => {
    return confirmPassword ? "" : "Confirm Password is required";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({
      ...errors,
      [name]: "", // Clear previous error for the field
    });

    setformData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    // console.log(formData.emailAddress,formData.password)

    const fullNameError = validatfullName(formData.fullName);
    const emailAddressError = validateemailAddress(formData.emailAddress);
    const passwordError = validatePassword(formData.password);
    const confirmPasswordError = validateConfirmPassword(
      formData.confirmPassword
    );

    if (emailAddressError || passwordError || fullNameError || confirmPasswordError) {
      setErrors({
        fullName: fullNameError,
        emailAddress: emailAddressError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
      });
    } else {
      // Perform login or further actions
      console.log("Form is valid. Perform login or other actions.");
    }

    try {
      const response =await axios.post("/user/signup",formData)
      // console.log(response);
      if(response.status==200){
        router.push("/login")
      }
    } catch (error) {
      console.log(error);
    }

    // console.log(formData);
  };

  return (
    <div>
      <div class="flex flex-col h-screen ">
        <div className="flex justify-center items-center bg-gradient-to-r from-orange-500 via-amber-700 to-red-950 h-screen w-screen">
          <div className="flex w-full flex-col z-10 my-auto justify-center items-center">
            <div className="md:w-1/3 h-4/5 bg-zinc-50 bg-opacity-60 p-4 dark:bg-slate-800 dark:bg-opacity-75 rounded-xl">
              <form class="" action="#">
              <a
                    href="#"
                    class="flex items-center mb-6 text-2xl font-bold text-orange-800 dark:text-white"
                  >
                    <Image
                      class="w-8 h-8 mr-2"
                      src="/khelaao22.png"
                      height={8}
                      width={8}
                      alt="logo"
                    />
                    Khelaao
                  </a>
                  <h1 class="text-xl font-bold leading-tight tracking-tight flex justify-center items-center text-red-900 md:text-2xl dark:text-red-900">
                    Sign Up
                  </h1>
                
                <div className="py-2 mx-3 grid md:gap-6">
                  <div className="relative z-0 w-full group">
                    <label
                      for="name"
                      class="block text-sm font-medium text-red-900 dark:text-red-900"
                    >
                      Full Name
                    </label>
                    <input
                      type="name"
                      name="fullName"
                      id="fname"
                      value={formData.fullName}
                      onChange={handleChange}
                      class="bg-gray-50 border text-black border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-slate-50 dark:border-slate-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                      placeholder="Full Name"
                      required=""
                    />
                    <div className="text-red-500 text-sm">
                      {errors.fullName}
                    </div>
                  </div>
                  <div className="relative z-0 w-full group">
                    <label
                      for="emailAddress"
                      class="block text-sm font-medium text-red-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="emailAddress"
                      id="emailAddress"
                      onChange={handleChange}
                      value={formData.emailAddress}
                      class="bg-gray-50 border text-black border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-slate-50 dark:border-slate-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                      placeholder="EmailAddress"
                      required=""
                    />
                    <div className="text-red-500 text-sm">{errors.emailAddress}</div>
                  </div>

                  {/* <div className="relative z-0 w-full sm:mb-2 group">
                    <label
                      for="small"
                      class="block text-sm font-medium text-red-900 dark:text-white"
                    >
                      Choose Role
                    </label>
                    <select
                      id="small"
                      class="bg-gray-50 border text-black border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-slate-50 dark:border-slate-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                    >
                      <option selected>Choose Role</option>
                      <option value="US">Bats Man</option>
                      <option value="CA">Baller</option>
                      <option value="FR">Umpire</option>
                    </select>
                  </div> */}
                  <div className="relative z-0 w-full sm:mb-2 group">
                    <label
                      for="password"
                      class="block  text-sm font-medium text-red-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={handleChange}
                      value={formData.password}
                      placeholder="Password"
                      class="bg-gray-50 border text-black border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-slate-50 dark:border-slate-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                      required=""
                    />
                    <div className="text-red-500 text-sm">
                      {errors.password}
                    </div>
                  </div>
                  <div className="relative z-0 w-full sm:mb-2 group">
                    <label
                      for="cpassword"
                      class="block  text-sm font-medium text-red-900 dark:text-white"
                    >
                      Comfirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="cpassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Comfrom Password"
                      class="bg-gray-50 border text-black border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-slate-50 dark:border-slate-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                      required=""
                    />
                    <div className="text-red-500 text-sm">
                      {errors.confirmPassword}
                    </div>
                  </div>

                  <div class="relative z-0 w-full  group">
                    <button
                      type="submit"
                      onClick={handleSignUp}
                      className=" w-full text-white bg-orange-800 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm py-2 mx-2 text-center dark:bg-orange-800 dark:hover:bg-orange-700 dark:focus:ring-primary-800"
                    >
                      SignUp
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
