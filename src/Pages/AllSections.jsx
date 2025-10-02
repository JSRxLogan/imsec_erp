import React, { useState } from "react";
import TTCard from "../components/TimeTable/TTCard";
import { NavLink } from "react-router-dom";

function AllSections() {
  const [sections, setSections] = useState([
    "2CSE1",
    "2CSE2",
    "2CSE3",
    "2CSE4",
    "3CSE1",
    "3CSE2",
    "3CSE3",
    "3CSE4",
    "4CSE1",
    "4CSE2",
    "4CSE3",
    "4CSE4",
  ]);
  const [newSection, setNewSection] = useState("");

  const handleAddSection = (e) => {
    e.preventDefault();
    if (newSection.trim() !== "" && !sections.includes(newSection)) {
      // ✅ Add section to the top
      setSections([newSection, ...sections]);
      setNewSection(""); // Clear input
    }
  };

  return (
    <div className="w-full m-5">
      {/* Add Section Form */}
      <form
        onSubmit={handleAddSection}
        className="flex gap-3 mb-5 items-center"
      >
        <input
          type="text"
          placeholder="Enter new section (e.g. 5CSE1)"
          value={newSection}
          onChange={(e) => setNewSection(e.target.value)}
          className="border border-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Section
        </button>
      </form>

      {/* Section Cards */}
      <div className="gap-4 flex flex-wrap items-center">
        {sections.map((section) => (
          <NavLink key={section} to={`/view/${section}`}>
            <TTCard title={section} />
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default AllSections;
