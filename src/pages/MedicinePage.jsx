import React from "react";
import {
  FaPills,
  FaTags,
  FaIndustry,
  FaBarcode,
  FaBoxes,
  FaRupeeSign,
  FaCalendarAlt,
} from "react-icons/fa";
import medicines from "../JsonFiles/MedicineList.json";

export default function MedicinePage() {
  return (
    <div className="p-16 bg-gradient-to-b from-green-50 to-white min-h-screen flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-20 max-w-[1800px]">
        <h1 className="text-[5rem] 2xl:text-[6.5rem] font-extrabold text-green-900 leading-tight">
          <FaPills className="inline-block mr-6 text-green-600 align-middle text-[4rem] 2xl:text-[5rem]" />
          Medicine Stock
        </h1>
        <p className="text-gray-700 mt-8 text-[2.5rem] 2xl:text-[3rem]">
          Current inventory of hospital medicines
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
                <FaPills className="inline-block mr-4 align-middle text-[2rem]" /> Medicine
              </th>
              <th className="p-10 text-left font-semibold">
                <FaTags className="inline-block mr-4 align-middle text-[2rem]" /> Category
              </th>
              <th className="p-10 text-left font-semibold">
                <FaIndustry className="inline-block mr-4 align-middle text-[2rem]" /> Manufacturer
              </th>
              <th className="p-10 text-left font-semibold">
                <FaBarcode className="inline-block mr-4 align-middle text-[2rem]" /> Batch No.
              </th>
              <th className="p-10 text-center font-semibold">
                <FaBoxes className="inline-block mr-4 align-middle text-[2rem]" /> Stock
              </th>
              <th className="p-10 text-center font-semibold">
                <FaRupeeSign className="inline-block mr-4 align-middle text-[2rem]" /> Price (₹)
              </th>
              <th className="p-10 text-center font-semibold">
                <FaCalendarAlt className="inline-block mr-4 align-middle text-[2rem]" /> Expiry Date
              </th>
            </tr>
          </thead>
          <tbody className="text-[2.2rem] 2xl:text-[2.5rem] text-gray-900">
            {medicines.map((med, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-green-50"
                } hover:bg-green-100 transition duration-300`}
              >
                <td className="p-10 border-b border-gray-300">{med.name}</td>
                <td className="p-10 border-b border-gray-300">{med.category}</td>
                <td className="p-10 border-b border-gray-300">{med.manufacturer}</td>
                <td className="p-10 border-b border-gray-300">{med.batchNumber}</td>
                <td className="p-10 text-center border-b border-gray-300">
                  <span
                    className={`px-8 py-4 rounded-full font-bold shadow-lg ${
                      med.stock > 50
                        ? "bg-green-100 text-green-800 border border-green-300"
                        : "bg-red-100 text-red-800 border border-red-300"
                    }`}
                  >
                    {med.stock}
                  </span>
                </td>
                <td className="p-10 text-center border-b border-gray-300">₹{med.price}</td>
                <td className="p-10 text-center border-b border-gray-300">{med.expiry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
