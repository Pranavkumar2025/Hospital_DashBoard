import React, { useState, useEffect } from "react";
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
  const [is4K, setIs4K] = useState(window.innerWidth >= 3840);

  useEffect(() => {
    const handleResize = () => {
      setIs4K(window.innerWidth >= 3840);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return is4K ? (
    // ----------- 4K VERSION -----------
    <div className="p-20 min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100">
      <div className="text-center mb-16 max-w-[1800px]">
        <h1 className="text-[5rem] 2xl:text-[6rem] font-bold leading-tight text-blue-400 flex items-center justify-center">
          <FaUserMd className="mr-6 text-blue-300 text-[4rem] 2xl:text-[5rem]" />
          Doctors Directory
        </h1>
        <p className="mt-6 text-[2.5rem] 2xl:text-[3rem] text-gray-300 font-medium">
          Meet our qualified and experienced medical professionals
        </p>
        <p className="mt-2 text-[2rem] 2xl:text-[2.2rem] text-gray-500">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="w-full max-w-[95%] 4xl:max-w-[85%] shadow-xl rounded-2xl bg-gray-800/90 backdrop-blur-sm border border-blue-600/50 overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-yellow-500 text-gray-900 text-[2.4rem] 2xl:text-[2.8rem] uppercase">
            <tr>
              <th className="p-8 text-left font-medium">
                <FaUserMd className="inline-block mr-4 align-middle text-blue-400 text-[2rem]" /> Name
              </th>
              <th className="p-8 text-left font-medium">
                <FaStethoscope className="inline-block mr-4 align-middle text-blue-400 text-[2rem]" /> Specialization
              </th>
              <th className="p-8 text-left font-medium">
                <FaGraduationCap className="inline-block mr-4 align-middle text-blue-400 text-[2rem]" /> Qualification
              </th>
              <th className="p-8 text-center font-medium">
                <MdWork className="inline-block mr-4 align-middle text-blue-400 text-[2rem]" /> Experience
              </th>
              <th className="p-8 text-center font-medium">
                <MdEventAvailable className="inline-block mr-4 align-middle text-blue-400 text-[2rem]" /> Status
              </th>
              <th className="p-8 text-center font-medium">
                <FaClock className="inline-block mr-4 align-middle text-blue-400 text-[2rem]" /> Available Time
              </th>
              <th className="p-8 text-center font-medium">
                <FaDoorOpen className="inline-block mr-4 align-middle text-blue-400 text-[2rem]" /> Room No.
              </th>
            </tr>
          </thead>
          <tbody className="text-[2.2rem] 2xl:text-[2.5rem] text-gray-200">
            {doctors.map((doc, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-900/50" : "bg-gray-800/50"
                } hover:bg-blue-900/30 transition-all duration-300 ease-in-out transform hover:scale-[1.005]`}
              >
                <td className="p-8 border-b border-blue-600/50">{doc.name}</td>
                <td className="p-8 border-b border-blue-600/50">{doc.specialization}</td>
                <td className="p-8 border-b border-blue-600/50">{doc.qualification}</td>
                <td className="p-8 text-center border-b border-blue-600/50">{doc.experience_years} yrs</td>
                <td className="p-8 text-center border-b border-blue-600/50">
                  <span
                    className={`px-8 py-3 rounded-full font-semibold shadow-md border ${
                      doc.present
                        ? "bg-green-900/20 text-green-300 border-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.3)]"
                        : "bg-red-900/20 text-red-300 border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.3)]"
                    } transition-all duration-300`}
                  >
                    {doc.status}
                  </span>
                </td>
                <td className="p-8 text-center border-b border-blue-600/50">{doc.available_time}</td>
                <td className="p-8 text-center border-b border-blue-600/50">{doc.room_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    // ----------- LAPTOP VERSION -----------
    <div className="p-6 md:p-8 lg:p-12 min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100">
      <div className="text-center mb-10 max-w-[1400px]">
        <h1 className="text-[1.8rem] md:text-[2.2rem] lg:text-[2.5rem] font-bold leading-tight text-blue-400 flex items-center justify-center">
          <FaUserMd className="mr-2 text-blue-300 text-[1.4rem] md:text-[1.8rem]" />
          Doctors Directory
        </h1>
        <p className="mt-3 text-[1rem] md:text-[1.1rem] text-gray-300 font-medium">
          Meet our qualified and experienced medical professionals
        </p>
        <p className="mt-2 text-[0.9rem] md:text-[1rem] text-gray-500">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="w-full max-w-[95%] shadow-lg rounded-xl bg-gray-800/90 backdrop-blur-sm border border-blue-600/50 overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-yellow-500 text-gray-900 text-[0.9rem] md:text-[1rem] uppercase">
            <tr>
              <th className="p-3 md:p-4 text-left font-medium">
                <FaUserMd className="inline-block mr-1 align-middle text-blue-400" /> Name
              </th>
              <th className="p-3 md:p-4 text-left font-medium">
                <FaStethoscope className="inline-block mr-1 align-middle text-blue-400" /> Specialization
              </th>
              <th className="p-3 md:p-4 text-left font-medium">
                <FaGraduationCap className="inline-block mr-1 align-middle text-blue-400" /> Qualification
              </th>
              <th className="p-3 md:p-4 text-center font-medium">
                <MdWork className="inline-block mr-1 align-middle text-blue-400" /> Experience
              </th>
              <th className="p-3 md:p-4 text-center font-medium">
                <MdEventAvailable className="inline-block mr-1 align-middle text-blue-400" /> Status
              </th>
              <th className="p-3 md:p-4 text-center font-medium">
                <FaClock className="inline-block mr-1 align-middle text-blue-400" /> Time
              </th>
              <th className="p-3 md:p-4 text-center font-medium">
                <FaDoorOpen className="inline-block mr-1 align-middle text-blue-400" /> Room
              </th>
            </tr>
          </thead>
          <tbody className="text-[0.9rem] md:text-[1rem] text-gray-200">
            {doctors.map((doc, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-900/50" : "bg-gray-800/50"
                } hover:bg-blue-900/30 transition-all duration-300 ease-in-out transform hover:scale-[1.005]`}
              >
                <td className="p-3 md:p-4 border-b border-blue-600/50">{doc.name}</td>
                <td className="p-3 md:p-4 border-b border-blue-600/50">{doc.specialization}</td>
                <td className="p-3 md:p-4 border-b border-blue-600/50">{doc.qualification}</td>
                <td className="p-3 md:p-4 text-center border-b border-blue-600/50">{doc.experience_years} yrs</td>
                <td className="p-3 md:p-4 text-center border-b border-blue-600/50">
                  <span
                    className={`px-3 py-1 rounded-full font-semibold shadow text-[0.85rem] border ${
                      doc.present
                        ? "bg-green-900/20 text-green-300 border-green-500/50 shadow-[0_0_8px_rgba(34,197,94,0.3)]"
                        : "bg-red-900/20 text-red-300 border-red-500/50 shadow-[0_0_8px_rgba(239,68,68,0.3)]"
                    } transition-all duration-300`}
                  >
                    {doc.status}
                  </span>
                </td>
                <td className="p-3 md:p-4 text-center border-b border-blue-600/50">{doc.available_time}</td>
                <td className="p-3 md:p-4 text-center border-b border-blue-600/50">{doc.room_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}