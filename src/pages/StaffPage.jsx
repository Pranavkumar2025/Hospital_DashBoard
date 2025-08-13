import React from "react";
import { FaUserTie, FaUserTag, FaBuilding, FaClock, FaUserCheck } from "react-icons/fa";
import staffData from "../JsonFiles/StaffList.json";

export default function StaffPage() {
  return (
    <div className="p-8 bg-gradient-to-b from-green-50 to-white min-h-screen">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-extrabold text-green-900">
          <FaUserTie className="inline-block mr-3 text-green-600 align-middle" />
          Staff Information
        </h1>
        <p className="text-gray-700 mt-4 text-3xl">
          Overview of hospital staff members and current status
        </p>
        <p className="text-gray-500 text-xl mt-2">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-xl rounded-lg">
        <table className="w-full border-collapse overflow-hidden">
          <thead className="bg-green-700 text-white text-3xl">
            <tr>
              <th className="p-6 text-left font-semibold"><FaUserTie className="inline-block mr-2 align-middle" /> Name</th>
              <th className="p-6 text-left font-semibold"><FaUserTag className="inline-block mr-2 align-middle" /> Role</th>
              <th className="p-6 text-left font-semibold"><FaBuilding className="inline-block mr-2 align-middle" /> Department</th>
              <th className="p-6 text-left font-semibold"><FaClock className="inline-block mr-2 align-middle" /> Shift</th>
              <th className="p-6 text-center font-semibold"><FaUserCheck className="inline-block mr-2 align-middle" /> Status</th>
            </tr>
          </thead>
          <tbody className="text-2xl text-gray-900">
            {staffData.staff.map((member, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-green-50"
                } hover:bg-green-100 transition duration-200`}
              >
                <td className="p-6 border-b border-gray-300">{member.name}</td>
                <td className="p-6 border-b border-gray-300">{member.role}</td>
                <td className="p-6 border-b border-gray-300">{member.department}</td>
                <td className="p-6 border-b border-gray-300">{member.shift}</td>
                <td className="p-6 text-center border-b border-gray-300">
                  <span
                    className={`px-6 py-2 rounded-full font-bold shadow-md ${
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
