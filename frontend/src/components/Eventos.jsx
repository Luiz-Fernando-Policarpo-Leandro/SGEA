import React from "react";
import { Link } from "react-router-dom";

const DashboardEventCard = ({
  id,
  title,
  location,
  date,
  hours,
  status,
  editable,
}) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex items-center justify-between mb-6 transform transition hover:scale-[1.01]">
      <div className="space-y-1.5 flex-grow pr-6">
        <h3 className="text-2xl font-semibold text-[#00707D]">{title}</h3>
        <p className="text-sm text-gray-600 flex items-center">
          {location}
          {location && date ? " | " : ""}
          {date}
          {date && hours ? " | " : ""}
          {hours}
        </p>
      </div>

      {editable ? (
        <Link
          to={`/organizador/evento/${id}`}
          className="border-2 border-gray-200 text-gray-700 px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors shadow-sm"
        >
          Editar
        </Link>
      ) : (
        <button className="bg-[#F94D4D] text-white px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors shadow-md">
          {status || "Encerrado"}
        </button>
      )}
    </div>
  );
};

export default DashboardEventCard;
