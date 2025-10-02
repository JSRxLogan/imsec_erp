import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Timetable from "../components/TimeTable/Timetable";

function SectionView() {
  const { sectionId } = useParams();
  const [timetable, setTimetable] = useState(null);
  const [loading, setLoading] = useState(true);

  /* useEffect(() => {
    // ✅ Backend call here
    // Example: GET /api/timetable/:sectionId
    // Replace with your actual API endpoint
    fetch(`http://localhost:5000/api/timetable/${sectionId}`)
      .then((res) => res.json())
      .then((data) => {
        setTimetable(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching timetable:", err);
        setLoading(false);
      });
  }, [sectionId]);

  if (loading) {
    return <p className="p-5 text-lg font-semibold">Loading timetable...</p>;
  }

  if (!timetable) {
    return (
      <p className="p-5 text-lg font-semibold text-red-500">
        No timetable found for {sectionId}.
      </p>
    );
  } */

  return (
    <div className="p-5">
      {/* ✅ Passing timetable data to Timetable component */}
      <Timetable timetable={timetable} />
    </div>
  );
}

export default SectionView;
