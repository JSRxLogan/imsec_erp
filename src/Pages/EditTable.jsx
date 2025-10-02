import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditPage({ timetable, setTimetable }) {
  const { day, slot } = useParams();
  const navigate = useNavigate();

  // Get existing lecture details if available
  const lecture = timetable[day]?.[slot] || {
    subject: "",
    teacher: "",
    code: "",
  };

  const [formData, setFormData] = useState(lecture);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update timetable
    const updated = { ...timetable };
    if (!updated[day]) updated[day] = {};
    updated[day][slot] = formData;

    setTimetable(updated);
    navigate("/"); // Go back to timetable page
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-2xl font-bold mb-4">
        Edit Lecture - {day}, Slot {slot}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-80 bg-white p-6 shadow rounded-xl"
      >
        <label className="flex flex-col">
          Subject Name:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Teacher Name:
          <input
            type="text"
            name="teacher"
            value={formData.teacher}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Subject Code:
          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Section:
          <input
            type="text"
            name="section"
            value={formData.section}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
}
