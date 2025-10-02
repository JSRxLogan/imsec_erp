import React from "react";

const TTCard = ({ title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer w-full bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      {/* Image Section */}
      <div className="h-32 bg-gray-200 flex items-center justify-center">
        <img
          src="https://admissionadvisor.in/assets/frontend/images/college/logo/IMS-Engineering-College.jpg"
          alt="Timetable"
          className="h-32 w-50 object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="p-5 text-center">
        <h3 className="text-xl font-semibold text-white drop-shadow-md">
          {title} {/* for section name */}
        </h3>
        <p className="text-xs lg:text-md text-gray-100 mt-2">
          Manage, schedule and edit timetable details
        </p>
      </div>
    </div>
  );
};

export default TTCard;
