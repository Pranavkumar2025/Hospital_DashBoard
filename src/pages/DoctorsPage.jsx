import React from "react";
import {
  FaUserMd,
  FaStethoscope,
  FaGraduationCap,
  FaClock,
  FaDoorOpen,
} from "react-icons/fa";
import { MdWork, MdEventAvailable } from "react-icons/md";
import doctors from "../JsonFiles/DoctorList.json";

export default function DoctorsPage() {
  return (
    <div className="p-16 bg-gradient-to-b from-cyan-50 to-white min-h-screen flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-20 max-w-[1800px]">
        <h1 className="text-[5rem] 2xl:text-[6.5rem] font-extrabold text-blue-900 leading-tight">
          <FaUserMd className="inline-block mr-6 text-blue-600 align-middle text-[4rem] 2xl:text-[5rem]" />
          Doctors Directory
        </h1>
        <p className="text-gray-700 mt-8 text-[2.5rem] 2xl:text-[3rem]">
          Meet our qualified and experienced medical professionals
        </p>
        <p className="text-gray-500 text-[2rem] 2xl:text-[2.2rem] mt-4">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-2xl rounded-3xl w-full max-w-[95%] 4xl:max-w-[85%]">
        <table className="w-full border-collapse">
          <thead className="bg-blue-700 text-white text-[2.4rem] 2xl:text-[2.8rem]">
            <tr>
              <th className="p-10 text-left font-semibold">
                <FaUserMd className="inline-block mr-4 align-middle text-[2rem]" /> Name
              </th>
              <th className="p-10 text-left font-semibold">
                <FaStethoscope className="inline-block mr-4 align-middle text-[2rem]" /> Specialization
              </th>
              <th className="p-10 text-left font-semibold">
                <FaGraduationCap className="inline-block mr-4 align-middle text-[2rem]" /> Qualification
              </th>
              <th className="p-10 text-center font-semibold">
                <MdWork className="inline-block mr-4 align-middle text-[2rem]" /> Experience
              </th>
              <th className="p-10 text-center font-semibold">
                <MdEventAvailable className="inline-block mr-4 align-middle text-[2rem]" /> Status
              </th>
              <th className="p-10 text-center font-semibold">
                <FaClock className="inline-block mr-4 align-middle text-[2rem]" /> Available Time
              </th>
              <th className="p-10 text-center font-semibold">
                <FaDoorOpen className="inline-block mr-4 align-middle text-[2rem]" /> Room No.
              </th>
            </tr>
          </thead>
          <tbody className="text-[2.2rem] 2xl:text-[2.5rem] text-gray-900">
            {doctors.map((doc, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-cyan-50"
                } hover:bg-cyan-100 transition duration-300`}
              >
                <td className="p-10 border-b border-gray-300">{doc.name}</td>
                <td className="p-10 border-b border-gray-300">{doc.specialization}</td>
                <td className="p-10 border-b border-gray-300">{doc.qualification}</td>
                <td className="p-10 text-center border-b border-gray-300">
                  {doc.experience_years} yrs
                </td>
                <td className="p-10 text-center border-b border-gray-300">
                  <span
                    className={`px-8 py-4 rounded-full font-bold shadow-lg ${
                      doc.present
                        ? "bg-green-100 text-green-800 border border-green-300"
                        : "bg-red-100 text-red-800 border border-red-300"
                    }`}
                  >
                    {doc.status}
                  </span>
                </td>
                <td className="p-10 text-center border-b border-gray-300">
                  {doc.available_time}
                </td>
                <td className="p-10 text-center border-b border-gray-300">
                  {doc.room_number}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
