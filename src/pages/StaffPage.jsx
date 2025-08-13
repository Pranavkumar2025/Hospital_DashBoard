import React from "react";
import {
  FaUserTie,
  FaUserTag,
  FaBuilding,
  FaClock,
  FaUserCheck,
} from "react-icons/fa";
import staffData from "../JsonFiles/StaffList.json";

export default function StaffPage() {
  return (
    <div className="p-16 bg-gradient-to-b from-green-50 to-white min-h-screen flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-20 max-w-[1800px]">
        <h1 className="text-[5rem] 2xl:text-[6.5rem] font-extrabold text-green-900 leading-tight">
          <FaUserTie className="inline-block mr-6 text-green-600 align-middle text-[4rem] 2xl:text-[5rem]" />
          Staff Information
        </h1>
        <p className="text-gray-700 mt-8 text-[2.5rem] 2xl:text-[3rem]">
          Overview of hospital staff members and current status
        </p>
        <p className="text-gray-500 text-[2rem] 2xl:text-[2.2rem] mt-4">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-2xl rounded-3xl w-full max-w-[95%] 4xl:max-w-[85%]">
        <table className="w-full border-collapse">
          <thead className="bg-green-700 text-white text-[2.4rem] 2xl:text-[2.8rem]">
            <tr>
              <th className="p-10 text-left font-semibold">
                <FaUserTie className="inline-block mr-4 align-middle text-[2rem]" /> Name
              </th>
              <th className="p-10 text-left font-semibold">
                <FaUserTag className="inline-block mr-4 align-middle text-[2rem]" /> Role
              </th>
              <th className="p-10 text-left font-semibold">
                <FaBuilding className="inline-block mr-4 align-middle text-[2rem]" /> Department
              </th>
              <th className="p-10 text-left font-semibold">
                <FaClock className="inline-block mr-4 align-middle text-[2rem]" /> Shift
              </th>
              <th className="p-10 text-center font-semibold">
                <FaUserCheck className="inline-block mr-4 align-middle text-[2rem]" /> Status
              </th>
            </tr>
          </thead>
          <tbody className="text-[2.2rem] 2xl:text-[2.5rem] text-gray-900">
            {staffData.staff.map((member, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-green-50"
                } hover:bg-green-100 transition duration-300`}
              >
                <td className="p-10 border-b border-gray-300">{member.name}</td>
                <td className="p-10 border-b border-gray-300">{member.role}</td>
                <td className="p-10 border-b border-gray-300">{member.department}</td>
                <td className="p-10 border-b border-gray-300">{member.shift}</td>
                <td className="p-10 text-center border-b border-gray-300">
                  <span
                    className={`px-8 py-4 rounded-full font-bold shadow-lg ${
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
