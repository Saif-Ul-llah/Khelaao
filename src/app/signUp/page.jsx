import Image from "next/image";
import React from "react";

const SignUp = () => {
    
  return (
    <div>
      <div class="flex flex-col h-screen ">
        <div className="flex justify-center items-center bg-gradient-to-r from-orange-500 via-amber-700 to-red-950 h-screen w-screen">
          {/* <div className='fixed flex justify-center items-center h-screen'>
                    <Image src='/up.jpg' alt='bg image' width={800} height={700} className='w-10/12 h-full' />
                </div> */}

          <div className="flex w-full flex-col z-10 my-auto justify-center items-center">
            <div className="md:w-1/3 h-4/5 bg-zinc-50 bg-opacity-60 p-4 dark:bg-slate-800 dark:bg-opacity-75 rounded-xl">
              <form class="" action="#">
                <a
                  href="#"
                  class="flex items-center mb-3 text-2xl font-semibold text-white dark:text-white"
                >
                  <Image
                    src="/khelaao22.png"
                    height={8}
                    width={8}
                    class="w-8 h-8 mr-2"
                    alt="logo"
                  />
                  Khelaao
                </a>
                <div className="py-2 mx-3 relative z-0 w-full md:col-span-2 group">
                  <h1 className="text-red-900 text-xl">SignUp</h1>
                </div>
                <div className="py-2 mx-3  md:gap-6">
                  <div className="relative z-0 w-full group">
                    <label
                      for="name"
                      class="block text-sm font-medium text-red-900 dark:text-red-900"
                    >
                      Full Name
                    </label>
                    <input
                      type="name"
                      name="fname"
                      id="fname"
                      class="bg-gray-50 border text-black border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-slate-50 dark:border-slate-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                      placeholder="Full Name"
                      required=""
                    />
                  </div>
                  <div className="relative z-0 w-full group">
                    <label
                      for="email"
                      class="block text-sm font-medium text-red-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="bg-gray-50 border text-black border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-slate-50 dark:border-slate-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                      placeholder="Email"
                      required=""
                    />
                  </div>

                  <div className="relative z-0 w-full sm:mb-2 group">
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
                  </div>
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
                      placeholder="Password"
                      class="bg-gray-50 border text-black border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-slate-50 dark:border-slate-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                      required=""
                    />
                  </div>
                  <div className="relative z-0 w-full sm:mb-2 group">
                    <label
                      for="cpassword"
                      class="block  text-sm font-medium text-red-900 dark:text-white"
                    >
                      Comfrom Password
                    </label>
                    <input
                      type="password"
                      name="cpassword"
                      id="cpassword"
                      placeholder="Comfrom Password"
                      class="bg-gray-50 border text-black border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-slate-50 dark:border-slate-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                      required=""
                    />
                  </div>

                  <div class="relative z-0 w-full  group">
                    <button
                      type="submit"
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
