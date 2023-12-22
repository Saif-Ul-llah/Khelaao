"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "../utilis/axios";
import { useCookies } from "react-cookie";
import jwt from "jsonwebtoken";
import useStore from "../store";

const Login = () => {
  // const key = "hamzaali";
  const { setUserData, setToken, setPlayerData } = useStore();
  // const { userData, setUserData } = useStore();
  const router = useRouter();
  const [cookie, setCookie] = useCookies(["token"]);
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    emailAddress: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailAddress: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({
      ...errors,
      [name]: "", // Clear previous error for the field
    });

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const Google = () => {
    signIn("google");
  };

  const validateEmail = (emailAddress) => {
    // Add your email validation logic here
    return emailAddress ? "" : "Email is required";
  };

  const validatePassword = (password) => {
    // Add your password validation logic here
    return password ? "" : "Password is required";
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    // console.log(formData.email,formData.password)
    const emailError = validateEmail(formData.emailAddress);
    const passwordError = validatePassword(formData.password);
    if (emailError || passwordError) {
      setErrors({
        emailAddress: emailError,
        password: passwordError,
      });
    } else {
      try {
        const response = await axios.post("/user/signIn", formData);
        if (response.status == 200) {
          const data = response.data;
          let token = data.token;

          const decodedToken = jwt.decode(token);
          if (decodedToken) {
            // cookie
            setCookie("token", JSON.stringify(data.token));
            setCookie("userData", JSON.stringify(decodedToken));
            // localStorage
            // localStorage.setItem("userData", JSON.stringify(decodedToken));
            const config = {
              headers: { Authorization: `Bearer ${data.token}` },
            };
            try {
              const resp = await axios.get("/player/getPlayer", config);
              // console.log(resp);
              // console.log(resp.data.player[0]);
              const NewPlayerData = resp.data.player[0];
              setPlayerData(NewPlayerData);

            // Zustand for token
            const newToken = token;
            setToken(newToken);
            // Zustand for userData
            const NewUserData = decodedToken;
            setUserData(NewUserData);
            // router.push("/dashboard");
            console.log(decodedToken);
            if (decodedToken.role == "Umpire") {
              router.push("/UmpireHome");
            } else {
              router.push("/dashboard");
            }
          } catch (error) {
            console.log(error);
          }
          } else {
            console.error("Failed to decode JWT");
          }
        }
      } catch (error) {
        console.log(error);
      }
    }

    // console.log(formData);
  };

  if (session) {
    try {
      let googleFormData = new FormData();

      const sessionString = JSON.stringify(session);
      const sessionJson = JSON.parse(sessionString);
      // console.log(sessionJson)
      // console.log(sessionJson.user.email)
      googleFormData.append("email", sessionJson.user.email);
      googleFormData.append("username", sessionJson.user.name);

      router.push("/home");
    } catch (error) {
      console.log(error.message);
    }
  } else {
    return (
      <div>
        {/* login comes here */}

        <div class="flex flex-col h-screen">
          <div class="flex justify-center items-center bg-gradient-to-r from-orange-500 via-amber-700 to-red-950">
            {/* <div className="fixed ">
            <Image src='/pic.jpg' alt='bg image' width={600} height={700}/>
          </div> */}
            <div class="flex flex-col items-center justify-center z-10 md:w-1/2 px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div class="w-full bg-transparent  bg-zinc-100 bg-opacity-75 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-transparent  dark:bg-zinc-100">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
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
                    Sign In
                  </h1>
                  <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-red-900 dark:text-red-900"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="emailAddress"
                        id="email"
                        onChange={handleChange}
                        value={formData.emailAddress}
                        class="bg-gray-50 border text-black border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-slate-50 dark:border-slate-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                        placeholder="Email"
                        required=""
                      />
                      <div className="text-red-500 text-sm">
                        {errors.emailAddress}
                      </div>
                    </div>
                    <div>
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-red-900 dark:text-red-900"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg text-black focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                        required=""
                      />
                      <div className="text-red-500 text-sm">
                        {errors.password}
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            class="w-4 h-4 border cursor-pointer border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            required=""
                          />
                        </div>
                        <div class="md:ml-3 ml-1 text-xs md:text-sm">
                          <label
                            for="remember"
                            class="text-red-900 dark:text-gray-300"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <a
                        href="#"
                        class="md:text-sm text-xs font-medium text-red-900 hover:underline dark:text-primary-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      class="w-full text-white bg-orange-600 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      onClick={handleSignIn}
                    >
                      Sign in
                    </button>
                  </form>
                  <div className="flex w-full mx- ">
                    <div className="w-1/2 border-b-2 mt-3 h-0 border-orange-900"></div>
                    <span className="text-orange-900 mx-2">Or</span>
                    <div className="w-1/2 border-b-2 mt-3 h-0 border-orange-900 "></div>
                  </div>
                  <div className="flex w-full text-center items-center justify-center ">
                    <div
                      className="flex bg-white rounded-full h-10 w-10 hover:bg-gray-200  items-center justify-center "
                      onClick={Google}
                    >
                      <FcGoogle className=" h-8 w-8" />
                    </div>
                  </div>
                  <p class="md:text-sm text-xs font-light text-red-900 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <a
                      href="/signUp"
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
