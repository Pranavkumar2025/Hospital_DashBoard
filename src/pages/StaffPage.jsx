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
      // Checks if screen width >= 3800px (roughly 4K)
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
        is4K ? "p-16" : "p-6"
      } bg-gradient-to-b from-green-50 to-white min-h-screen flex flex-col items-center`}
    >
      {/* Header */}
      <div
        className={`text-center ${is4K ? "mb-20" : "mb-8"} max-w-[1800px]`}
      >
        <h1
          className={`font-extrabold text-green-900 leading-tight flex items-center justify-center ${
            is4K
              ? "text-[5rem] 2xl:text-[6.5rem]"
              : "text-2xl md:text-3xl"
          }`}
        >
          <FaUserTie
            className={`mr-3 text-green-600 align-middle ${
              is4K
                ? "text-[4rem] 2xl:text-[5rem] mr-6"
                : "text-xl md:text-2xl"
            }`}
          />
          Staff Information
        </h1>
        <p
          className={`text-gray-700 ${
            is4K
              ? "mt-8 text-[2.5rem] 2xl:text-[3rem]"
              : "mt-2 text-sm md:text-base"
          }`}
        >
          Overview of hospital staff members and current status
        </p>
        <p
          className={`text-gray-500 ${
            is4K
              ? "text-[2rem] 2xl:text-[2.2rem] mt-4"
              : "text-xs md:text-sm mt-1"
          }`}
        >
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      {/* Table */}
      <div
        className={`overflow-x-auto ${
          is4K
            ? "shadow-2xl rounded-3xl w-full max-w-[95%] 4xl:max-w-[85%]"
            : "shadow-lg rounded-xl w-full max-w-[95%]"
        }`}
      >
        <table className="w-full border-collapse">
          <thead
            className={`bg-green-700 text-white ${
              is4K ? "text-[2.4rem] 2xl:text-[2.8rem]" : "text-xs md:text-sm"
            }`}
          >
            <tr>
              <th
                className={`font-semibold text-left ${
                  is4K ? "p-10" : "p-3"
                }`}
              >
                <FaUserTie
                  className={`inline-block mr-2 align-middle ${
                    is4K ? "text-[2rem] mr-4" : "text-base"
                  }`}
                />{" "}
                Name
              </th>
              <th className={`${is4K ? "p-10" : "p-3"} text-left font-semibold`}>
                <FaUserTag
                  className={`inline-block mr-2 align-middle ${
                    is4K ? "text-[2rem] mr-4" : "text-base"
                  }`}
                />{" "}
                Role
              </th>
              <th className={`${is4K ? "p-10" : "p-3"} text-left font-semibold`}>
                <FaBuilding
                  className={`inline-block mr-2 align-middle ${
                    is4K ? "text-[2rem] mr-4" : "text-base"
                  }`}
                />{" "}
                Department
              </th>
              <th className={`${is4K ? "p-10" : "p-3"} text-left font-semibold`}>
                <FaClock
                  className={`inline-block mr-2 align-middle ${
                    is4K ? "text-[2rem] mr-4" : "text-base"
                  }`}
                />{" "}
                Shift
              </th>
              <th
                className={`${is4K ? "p-10" : "p-3"} text-center font-semibold`}
              >
                <FaUserCheck
                  className={`inline-block mr-2 align-middle ${
                    is4K ? "text-[2rem] mr-4" : "text-base"
                  }`}
                />{" "}
                Status
              </th>
            </tr>
          </thead>
          <tbody
            className={`text-gray-900 ${
              is4K
                ? "text-[2.2rem] 2xl:text-[2.5rem]"
                : "text-xs md:text-sm"
            }`}
          >
            {staffData.staff.map((member, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-green-50"
                } hover:bg-green-100 transition duration-300`}
              >
                <td
                  className={`${is4K ? "p-10" : "p-3"} border-b border-gray-300`}
                >
                  {member.name}
                </td>
                <td
                  className={`${is4K ? "p-10" : "p-3"} border-b border-gray-300`}
                >
                  {member.role}
                </td>
                <td
                  className={`${is4K ? "p-10" : "p-3"} border-b border-gray-300`}
                >
                  {member.department}
                </td>
                <td
                  className={`${is4K ? "p-10" : "p-3"} border-b border-gray-300`}
                >
                  {member.shift}
                </td>
                <td
                  className={`${is4K ? "p-10" : "p-3"} text-center border-b border-gray-300`}
                >
                  <span
                    className={`rounded-full font-bold shadow ${
                      is4K
                        ? "px-8 py-4 shadow-lg"
                        : "px-3 py-1 shadow-sm text-[0.7rem] md:text-xs"
                    } ${
                      member.status === "Present"
                        ? "bg-green-100 text-green-800 border border-green-300"
                        : "bg-red-100 text-red-800 border border-red-300"
                    }`}
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
