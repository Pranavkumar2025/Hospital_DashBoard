import React from "react";
import { FaPills, FaTags, FaIndustry, FaBarcode, FaBoxes, FaRupeeSign, FaCalendarAlt } from "react-icons/fa";
import medicines from "../JsonFiles/MedicineList.json";

export default function MedicinePage() {
  return (
    <div className="p-8 bg-gradient-to-b from-green-50 to-white min-h-screen">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-extrabold text-green-900">
          <FaPills className="inline-block mr-3 text-green-600 align-middle" />
          Medicine Stock
        </h1>
        <p className="text-gray-700 mt-4 text-3xl">
          Current inventory of hospital medicines
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
              <th className="p-6 text-left font-semibold"><FaPills className="inline-block mr-2 align-middle" /> Medicine</th>
              <th className="p-6 text-left font-semibold"><FaTags className="inline-block mr-2 align-middle" /> Category</th>
              <th className="p-6 text-left font-semibold"><FaIndustry className="inline-block mr-2 align-middle" /> Manufacturer</th>
              <th className="p-6 text-left font-semibold"><FaBarcode className="inline-block mr-2 align-middle" /> Batch No.</th>
              <th className="p-6 text-center font-semibold"><FaBoxes className="inline-block mr-2 align-middle" /> Stock</th>
              <th className="p-6 text-center font-semibold"><FaRupeeSign className="inline-block mr-2 align-middle" /> Price (₹)</th>
              <th className="p-6 text-center font-semibold"><FaCalendarAlt className="inline-block mr-2 align-middle" /> Expiry Date</th>
            </tr>
          </thead>
          <tbody className="text-2xl text-gray-900">
            {medicines.map((med, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-green-50"
                } hover:bg-green-100 transition duration-200`}
              >
                <td className="p-6 border-b border-gray-300">{med.name}</td>
                <td className="p-6 border-b border-gray-300">{med.category}</td>
                <td className="p-6 border-b border-gray-300">{med.manufacturer}</td>
                <td className="p-6 border-b border-gray-300">{med.batchNumber}</td>
                <td className="p-6 text-center border-b border-gray-300">
                  <span
                    className={`px-6 py-2 rounded-full font-bold shadow-md ${
                      med.stock > 50
                        ? "bg-green-100 text-green-800 border border-green-300"
                        : "bg-red-100 text-red-800 border border-red-300"
                    }`}
                  >
                    {med.stock}
                  </span>
                </td>
                <td className="p-6 text-center border-b border-gray-300">₹{med.price}</td>
                <td className="p-6 text-center border-b border-gray-300">{med.expiry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
