import React from "react";
import globe from "../assets/globe (1).png"
import traingaleDropdown from "../assets/down-filled-triangular-arrow.png"

type Props = {};

function Footer({}: Props) {
  return (
    <div>
      <div className="flex flex-col text-[#737373] px-14 md:px-28 lg:px-40 xl:px-64 mt-14">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 my-4">
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-sm font-medium">
            FAQ
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-sm font-medium">
            Investor Relations
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-sm font-medium">
            Privacy
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-sm font-medium">
            Speed Test
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Help Centre
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Jobs
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Cookie Preferences
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Legal Notices
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Account
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Ways to Watch
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Corporate Information
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Only on Netflix
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Media Centre
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Terms of Use
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            {" "}
            <a href="https://www.linkedin.com/in/nikhilpn/" target={"_blank"}>
              Contact Us
            </a>{" "}
          </li>
        </ul>
        <button className="flex justify-center items-center font-medium h-12 w-36 border border-[#737373]">
          <img
            className="w-4 m-3  "
            src={globe}
            alt="globe"
          />
          English
          <img
            className="w-3 m-2 pt-0.5"
            src={traingaleDropdown}
            alt="drop-down"
          />
        </button>
        <p className="my-4 text-xs font-medium">Netflix</p>
        <p className="my-4 text-xs font-medium">
          Nikhilpn725@gmail.com
        </p>
      </div>

      <div className="h-9 py-1 text-white text-center bg-[#333333]">
        <section>
        For Educational  Purposes Only | GitHub Link :   
        <span className="text-green-500">
           <a href="https://github.com/nikhil-pn/E-Commerce-Firebase-Redux-DN" className=" "> Source Code</a>
          </span>
        </section>
      </div>
    </div>
  );
}

export default Footer;
