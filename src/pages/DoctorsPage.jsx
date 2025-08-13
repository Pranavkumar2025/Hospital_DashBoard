import React from "react";
import { FaUserMd, FaStethoscope, FaGraduationCap, FaClock, FaDoorOpen } from "react-icons/fa";
import { MdWork, MdEventAvailable } from "react-icons/md";
import doctors from "../JsonFiles/DoctorList.json";

export default function DoctorsPage() {
  return (
    <div className="p-8 bg-gradient-to-b from-cyan-50 to-white min-h-screen">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-extrabold text-blue-900">
          <FaUserMd className="inline-block mr-3 text-blue-600 align-middle" />
          Doctors Directory
        </h1>
        <p className="text-gray-700 mt-4 text-3xl">
          Meet our qualified and experienced medical professionals
        </p>
        <p className="text-gray-500 text-xl mt-2">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-xl rounded-lg">
        <table className="w-full border-collapse overflow-hidden">
          <thead className="bg-blue-700 text-white text-3xl">
            <tr>
              <th className="p-6 text-left font-semibold"><FaUserMd className="inline-block mr-2 align-middle" /> Name</th>
              <th className="p-6 text-left font-semibold"><FaStethoscope className="inline-block mr-2 align-middle" /> Specialization</th>
              <th className="p-6 text-left font-semibold"><FaGraduationCap className="inline-block mr-2 align-middle" /> Qualification</th>
              <th className="p-6 text-center font-semibold"><MdWork className="inline-block mr-2 align-middle" /> Experience</th>
              <th className="p-6 text-center font-semibold"><MdEventAvailable className="inline-block mr-2 align-middle" /> Status</th>
              <th className="p-6 text-center font-semibold"><FaClock className="inline-block mr-2 align-middle" /> Available Time</th>
              <th className="p-6 text-center font-semibold"><FaDoorOpen className="inline-block mr-2 align-middle" /> Room No.</th>
            </tr>
          </thead>
          <tbody className="text-2xl text-gray-900">
            {doctors.map((doc, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-cyan-50"
                } hover:bg-cyan-100 transition duration-200`}
              >
                <td className="p-6 border-b border-gray-300">{doc.name}</td>
                <td className="p-6 border-b border-gray-300">{doc.specialization}</td>
                <td className="p-6 border-b border-gray-300">{doc.qualification}</td>
                <td className="p-6 text-center border-b border-gray-300">{doc.experience_years} yrs</td>
                <td className="p-6 text-center border-b border-gray-300">
                  <span
                    className={`px-6 py-2 rounded-full font-bold shadow-md ${
                      doc.present
                        ? "bg-green-100 text-green-800 border border-green-300"
                        : "bg-red-100 text-red-800 border border-red-300"
                    }`}
                  >
                    {doc.status}
                  </span>
                </td>
                <td className="p-6 text-center border-b border-gray-300">{doc.available_time}</td>
                <td className="p-6 text-center border-b border-gray-300">{doc.room_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
