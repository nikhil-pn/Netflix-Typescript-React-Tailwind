import React from "react";
import { useNavigate } from "react-router-dom";
import netflix from "../assets/Netflix_Logo_PMS.png"
import globe from "../assets/globe (1).png"
import traingaleDropdown from "../assets/down-filled-triangular-arrow.png"
import rightArrow from "../assets/right-arrow-angle.png"

type Props = {};

function SigninBanner({ }: Props) {
  const navigate = useNavigate()
  function handleClick() {
    console.log("here");

    navigate("/browse")
  }
  return (
    <div className="h-[65vh] sm:h-[100vh] xl:h-[100vh] bg-cover bg-no-repeat bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/84526d58-475e-4e6f-9c81-d2d78ddce803/e3b08071-f218-4dab-99a2-80315f0922cd/LK-en-20221228-popsignuptwoweeks-perspective_alpha_website_small.jpg')]  ">
      <div className="bg-black bg-opacity-70 h-[100vh]">
        <div className="flex items-center justify-between ">
          <img
            className="w-28 sm:w-36 lg:w-52 ml-4 sm:ml-8 pt-4"
            src={netflix}
            alt="logo_red"
          />
          <div className="flex mr-4 sm:mr-10">
            <button className="flex justify-center items-center text-white h-8 sm:rounded-none m-2 mr-6 border rounded">
              <img
                className="w-4 mx-1  "
                src={globe}
                alt="globe"
              />
              English
              <img
                className="w-3 mx-1 pt-1"
                src={traingaleDropdown}
                alt="drop-down"
              />
            </button>
            <button onClick={handleClick}
              className="h-8 px-1 sm:px-4 m-2 text-white bg-[#e50914] rounded hover:bg-[#e50914]"

            >
              Sign in as Test User
            </button>
          </div>
        </div>
        <div className="h-[55vh] sm:h-[80vh] w-[90%] md:w-[80%] mx-[5%] md:mx-[10%] flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl sm:px-[15%] md:px-[15%] lg:mx-14 lg:px-[7%] xl:px-[15%] font-medium">
            Unlimited movies, TV shows, and more..
          </h1>
          <h2 className="text-lg sm:text-1xl lg:text-2xl font-medium m-2 sm:m-4">
            Watch anywhere. Cancel anytime.
          </h2>
          <p className="text-lg lg:text-base font-medium sm:px-[26%] md:px-[10%] m-2 sm:m-3 px-12">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex flex-col md:flex-row justify-center">
            <input
              className="h-12 md:h-14 xl:h-16 w-[70vw] sm:w-[28rem]  md:w-[28rem] lg:w-[34rem] sm:my-2 text-gray-900 font-medium"
              type="email"
              name="email"
              placeholder="Email address"
            />
            <button className="flex self-center w-32 md:w-52 items-center bg-red-600 hover:bg-[#e50914] pl-4 md:pl-7 h-10 md:h-14 xl:h-16 m-2 md:m-0 md:text-2xl rounded">
              Get Started
              <img
                className="w-4 md:w-7 pt-1 text-white"
                src={rightArrow}
                alt="right-angle"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninBanner;
