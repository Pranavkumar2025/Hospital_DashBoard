import React, { useState, useEffect } from "react";
import {
  FaUserTie,
  FaUserTag,
  FaBuilding,
  FaClock,
  FaUserCheck,
} from "react-icons/fa";
import staffData from "../JsonFiles/StaffList.json";

export default function StaffPage() {
  const [is4K, setIs4K] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 3800) {
        setIs4K(true);
      } else {
        setIs4K(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      className={`${
        is4K ? "p-20" : "p-6 md:p-8 lg:p-12"
      } min-h-screen flex flex-col items-center relative bg-gray-800 text-gray-200`}
    >
      

      {/* Layer 2: SVG medical pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="staff-pattern"
            patternUnits="userSpaceOnUse"
            width="80"
            height="80"
          >
            <g fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1">
              {/* Stethoscope */}
              <path d="M20 30a10 10 0 0110 10c0 5-4 10-10 10s-10-5-10-10a10 10 0 0110-10m0 0v20m-5-10h10" />
              {/* Clipboard */}
              <rect x="40" y="20" width="20" height="30" rx="5" ry="5" />
              <path d="M45 20v-5h10v5" />
              {/* Heart */}
              <path d="M30 60c-3-5-10-5-10 0s3 10 10 10 10-5 10-10-7-5-10 0z" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#staff-pattern)" />
      </svg>

      {/* Content wrapper */}
      <div
        className={`relative z-10 text-center ${
          is4K ? "mb-20 max-w-[1800px]" : "mb-10 max-w-[1400px]"
        }`}
      >
        <h1
          className={`font-bold text-yellow-500 leading-tight flex items-center justify-center ${
            is4K
              ? "text-[5rem] 2xl:text-[6.5rem]"
              : "text-2xl md:text-3xl lg:text-[2.5rem]"
          }`}
        >
          <FaUserTie
            className={`mr-3 text-yellow-600 align-middle ${
              is4K
                ? "text-[4rem] 2xl:text-[5rem] mr-6"
                : "text-xl md:text-2xl"
            }`}
          />
          Staff Information
        </h1>
        <p
          className={`text-gray-300 font-medium ${
            is4K
              ? "mt-8 text-[2.5rem] 2xl:text-[3rem]"
              : "mt-3 text-sm md:text-base"
          }`}
        >
          Overview of hospital staff members and current status
        </p>
        <p
          className={`text-gray-400 ${
            is4K
              ? "text-[2rem] 2xl:text-[2.2rem] mt-4"
              : "text-xs md:text-sm mt-2"
          }`}
        >
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      {/* Table */}
      <div
        className={`relative z-10 overflow-x-auto ${
          is4K
            ? "shadow-xl rounded-3xl w-full max-w-[95%] 4xl:max-w-[85%]"
            : "shadow-lg rounded-xl w-full max-w-[95%]"
        } bg-gray-800/70 backdrop-blur-md border border-blue-300/30`}
      >
        <table className="w-full border-collapse">
          <thead
            className={`bg-yellow-400 text-gray-900 font-extrabold ${
              is4K ? "text-[2.4rem] 2xl:text-[2.8rem]" : "text-sm md:text-base"
            } uppercase shadow-lg border-b border-blue-300/30`}
          >
            <tr>
              <th
                className={`text-left ${is4K ? "p-10" : "p-3 md:p-4"}`}
              >
                <FaUserTie
                  className={`inline-block mr-2 align-middle text-blue-600 ${
                    is4K ? "text-[2rem] mr-4" : "text-base"
                  }`}
                />
                Name
              </th>
              <th
                className={`text-left ${is4K ? "p-10" : "p-3 md:p-4"}`}
              >
                <FaUserTag
                  className={`inline-block mr-2 align-middle text-blue-600 ${
                    is4K ? "text-[2rem] mr-4" : "text-base"
                  }`}
                />
                Role
              </th>
              <th
                className={`text-left ${is4K ? "p-10" : "p-3 md:p-4"}`}
              >
                <FaBuilding
                  className={`inline-block mr-2 align-middle text-blue-600 ${
                    is4K ? "text-[2rem] mr-4" : "text-base"
                  }`}
                />
                Department
              </th>
              <th
                className={`text-left ${is4K ? "p-10" : "p-3 md:p-4"}`}
              >
                <FaClock
                  className={`inline-block mr-2 align-middle text-blue-600 ${
                    is4K ? "text-[2rem] mr-4" : "text-base"
                  }`}
                />
                Shift
              </th>
              <th
                className={`text-center ${is4K ? "p-10" : "p-3 md:p-4"}`}
              >
                <FaUserCheck
                  className={`inline-block mr-2 align-middle text-blue-600 ${
                    is4K ? "text-[2rem] mr-4" : "text-base"
                  }`}
                />
                Status
              </th>
            </tr>
          </thead>
          <tbody
            className={`text-gray-200 ${
              is4K
                ? "text-[2.2rem] 2xl:text-[2.5rem]"
                : "text-xs md:text-sm"
            }`}
          >
            {staffData.staff.map((member, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-700/70" : "bg-gray-800/70"
                } hover:bg-blue-900/50 transition-all duration-300 ease-in-out transform hover:scale-[1.005]`}
              >
                <td
                  className={`${
                    is4K ? "p-10" : "p-3 md:p-4"
                  } border-b border-blue-300/30`}
                >
                  {member.name}
                </td>
                <td
                  className={`${
                    is4K ? "p-10" : "p-3 md:p-4"
                  } border-b border-blue-300/30`}
                >
                  {member.role}
                </td>
                <td
                  className={`${
                    is4K ? "p-10" : "p-3 md:p-4"
                  } border-b border-blue-300/30`}
                >
                  {member.department}
                </td>
                <td
                  className={`${
                    is4K ? "p-10" : "p-3 md:p-4"
                  } border-b border-blue-300/30`}
                >
                  {member.shift}
                </td>
                <td
                  className={`${
                    is4K ? "p-10" : "p-3 md:p-4"
                  } text-center border-b border-blue-300/30`}
                >
                  <span
                    className={`rounded-full font-semibold shadow border ${
                      is4K
                        ? "px-8 py-4 shadow-lg text-[1.8rem]"
                        : "px-3 py-1 shadow-sm text-[0.7rem] md:text-xs"
                    } ${
                      member.status === "On Duty"
                        ? "bg-green-600 text-white border-green-700 shadow-[0_0_8px_rgba(34,197,94,0.3)]"
                        : "bg-red-600 text-white border-red-700 shadow-[0_0_8px_rgba(239,68,68,0.3)]"
                    } transition-all duration-300`}
                  >
                    {member.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}