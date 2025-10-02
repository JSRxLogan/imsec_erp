import React, { useState } from "react";
import { Link } from "react-router-dom";

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const lectureSlots = [
  "8:50 - 9:40",
  "9:40 - 10:30",
  "10:30 - 11:20",
  "11:20 - 12:10",
  "12:10 - 1:00",
  "1:00 - 1:50",
  "1:50 - 2:40",
  "2:40 - 3:20",
  "3:20 - 4:20",
];

export default function Timetable({ timetable }) {
  const [title, setTitle] = useState("2CSE-3");
  const [room, setRoom] = useState("C101");

  return (
    <div className="p-2">
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Timetable - {title}
          <p>Room No - {room}</p>
        </h1>
      </div>
      <div className="overflow-x-auto w-full shadow-lg rounded-lg">
        <table className="w-full border border-gray-300 text-sm text-center bg-white">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2 border border-gray-300">Day</th>
              {lectureSlots.map((slot, i) => (
                <th key={i} className="px-4 py-2 border border-gray-300">
                  {slot}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weekdays.map((day, dayIndex) => (
              <tr
                key={dayIndex}
                className="hover:bg-gray-100 transition duration-200"
              >
                <td className="px-4 py-3 font-medium border border-gray-300 bg-gray-50">
                  {day}
                </td>
                {lectureSlots.map((_, slotIndex) => (
                  <td
                    key={slotIndex}
                    className="px-4 py-3 border border-gray-300 min-w-[140px]"
                  >
                    {timetable?.[dayIndex]?.[slotIndex] ? (
                      <div>
                        <span className="font-semibold text-gray-800">
                          {timetable[dayIndex][slotIndex].subject}
                        </span>
                        <br />
                        <span className="text-gray-600 text-xs">
                          {timetable[dayIndex][slotIndex].teacher} (
                          {timetable[dayIndex][slotIndex].code})
                        </span>
                      </div>
                    ) : (
                      <span className="text-gray-400 italic">Empty</span>
                    )}
                    <div className="flex items-center justify-center gap-2">
                      <div className="mt-2">
                        <Link
                          to={`/edit/${dayIndex}/${slotIndex}`}
                          className="text-blue-600 text-xs underline hover:text-blue-800"
                        >
                          Edit
                        </Link>
                      </div>
                      <div className="mt-2">
                        <Link
                          to={`/upload/${dayIndex}/${slotIndex}`}
                          className="text-blue-600 text-xs underline hover:text-blue-800"
                        >
                          Upload
                        </Link>
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
