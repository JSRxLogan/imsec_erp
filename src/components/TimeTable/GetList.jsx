import React, { useState } from "react";

const GetList = () => {
  // Example student data
  const [students, setStudents] = useState([
    { id: 1, name: "Aman Sharma", roll: "101", present: false },
    { id: 2, name: "Manan Sehgal", roll: "102", present: false },
    { id: 3, name: "Priya Gupta", roll: "103", present: false },
  ]);
  const [present, setPresent] = useState([]) // for saving present students.
  // Toggle attendance for single student
  const handleAttendance = (id) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  // Mark all present
  const selectAll = () => {
    setStudents((prev) => prev.map((s) => ({ ...s, present: true })));
  };

  // Reset all
  const resetAll = () => {
    setStudents((prev) => prev.map((s) => ({ ...s, present: false })));
  };
  const UploadAttendence = () => {
    alert('This button will result in uploading the attendence yet to connect with backend')
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg mt-8">
      <h2 className="text-xl font-semibold mb-4 text-center">Attendance List</h2>

      {/* Buttons */}
      <div className="flex justify-between mb-4">
        <button
          onClick={selectAll}
          className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
        >
          Select All
        </button>
        <button
          onClick={resetAll}
          className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
        >
          Reset
        </button>
      </div>

      {/* Table */}
      <table className="w-full border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Roll No.</th>
            <th className="p-2 text-center">Present</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-b">
              <td className="p-2">{student.name}</td>
              <td className="p-2">{student.roll}</td>
              <td className="p-2 text-center">
                <input
                  type="checkbox"
                  checked={student.present}
                  onChange={() => handleAttendance(student.id)}
                  className="w-5 h-5 accent-green-600 cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Summary */}
      <div className="mt-4 text-sm text-gray-600">
        Present: {students.filter((s) => s.present).length} / {students.length}
      </div>

      <input type="text" placeholder="which Topic is covered..?"
        className="border-2 border-gray-400 bg-grey w-full px-3 py-2 rounded-xl"
      />
      <button
          onClick={UploadAttendence}
          className="px-4 py-2 mt-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
        >
          Save Changes
        </button>
    </div>
  );
};

export default GetList;
