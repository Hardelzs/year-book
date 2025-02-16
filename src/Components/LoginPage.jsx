import { useState } from 'react';

const LoginPage = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);

  return (
    <div className="w-screen overflow-hidden font-[Verdana]">
      <div className="w-full bg-[#1b1b1b]">
        <div className="grid grid-cols-2 items-center max-w-[80rem] mx-auto pt-40 overflow-hidden">
          {/* Login/Signup Toggle Sections */}
          <div className="flex flex-col items-center justify-center gap-4 p-[40%] bg-[#A020F0] text-2xl text-[#1b1b1b] rounded-l-2xl">
            <span>Already a Member?</span>
            <button
              onClick={() => setIsLoginActive(true)}
              className="outline-none border-2 border-[#1b1b1b] bg-[#1b1b1b] text-[#A020F0] px-6 py-3 
              transition-all duration-300 hover:bg-transparent hover:text-[#1b1b1b]"
            >
              Login
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 p-[40%] bg-[#A020F0] text-2xl text-[#1b1b1b] rounded-r-2xl">
            <span>Not Part Of Us?</span>
            <button
              onClick={() => setIsLoginActive(false)}
              className="outline-none border-2 border-[#1b1b1b] bg-[#1b1b1b] text-[#A020F0] px-6 py-3 
              transition-all duration-300 hover:bg-transparent hover:text-[#1b1b1b]"
            >
              Sign Up
            </button>
          </div>

          {/* Forms Container */}
          <div className={`col-span-2 grid grid-cols-2 bg-white rounded-[40px] transition-all duration-300
            ${isLoginActive ? 'clip-path-login' : 'clip-path-signup'}`}>
            
            {/* Login Form */}
            {/* <form className={`p-8 max-w-[500px] h-[520px] flex flex-col justify-center transition-transform duration-400
              ${isLoginActive ? 'opacity-100' : 'opacity-0'}`}>
              <h2 className="text-2xl text-center mb-8">Login</h2>
              <input
                type="email"
                placeholder="Email"
                className="w-[30rem] h-[4rem] px-6 my-2 border-2 border-gray-300 focus:border-[#1b1b1b] outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-[30rem] h-[4rem] px-6 my-2 border-2 border-gray-300 focus:border-[#1b1b1b] outline-none"
              />
              <button
                type="button"
                className="w-48 h-16 mt-8 mx-auto text-base uppercase border-2 border-[#1b1b1b] 
                transition-all duration-300 hover:bg-[#1b1b1b] hover:text-white"
              >
                Login
              </button>
            </form> */}

            {/* Signup Form */}
            {/* <form className={`p-8 max-w-[500px] h-[520px] flex flex-col justify-center transition-transform duration-400
              ${!isLoginActive ? 'opacity-100' : 'opacity-0'}`}>
              <h2 className="text-2xl text-center mb-8">Sign Up</h2>
              <input
                type="text"
                placeholder="First Name"
                className="w-[30rem] h-[4rem] px-6 my-2 border-2 border-gray-300 focus:border-[#1b1b1b] outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-[30rem] h-[4rem] px-6 my-2 border-2 border-gray-300 focus:border-[#1b1b1b] outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-[30rem] h-[4rem] px-6 my-2 border-2 border-gray-300 focus:border-[#1b1b1b] outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-[30rem] h-[4rem] px-6 my-2 border-2 border-gray-300 focus:border-[#1b1b1b] outline-none"
              />
              <button
                type="button"
                className="w-48 h-16 mt-8 mx-auto text-base uppercase border-2 border-[#1b1b1b] 
                transition-all duration-300 hover:bg-[#1b1b1b] hover:text-white"
              >
                Sign Up
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;