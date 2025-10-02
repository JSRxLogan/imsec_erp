import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./Layout";
import { HomePage } from "./components/index.js";

import AllSections from "./Pages/AllSections";
import SectionView from "./Pages/SectionView";
import Timetable from "./components/TimeTable/Timetable.jsx";
import EditPage from "./Pages/EditTable";
import Upload from "./Pages/Upload";

function App() {
  const [timetable, setTimetable] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        {/* Routes without layout (e.g., auth) */}
        {/* <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} /> */}

        {/* Routes with Layout (Header/Footer/Sidebar stay the same) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          {/* 🔹 Timetable Module */}
          <Route path="timetable/sections" element={<AllSections />} />
          <Route path="view/:sectionId" element={<SectionView />} />

          {/* Original Timetable Page */}
          <Route path="timetable" element={<Timetable timetable={timetable} />} />

          {/* Edit slot */}
          <Route
            path="edit/:day/:slot"
            element={<EditPage timetable={timetable} setTimetable={setTimetable} />}
          />

          {/* Upload slot */}
          <Route
            path="upload/:day/:slot"
            element={<Upload timetable={timetable} setTimetable={setTimetable} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
