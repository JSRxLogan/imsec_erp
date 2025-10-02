import React, { useState } from 'react'
import GetList from '../components/TimeTable/GetList';

function Upload() {
    const [students, setStudents] = useState([]);

  return (
    <div>
        Needs a lot of things like section wise students list ....
      <GetList />
    </div>
  )
}

export default Upload
