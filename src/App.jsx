import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import {HomePage} from './components/index.js';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Routes without header/footer */}
        {/* <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} /> */}

        {/* Routes with layout (Header/Footer stays the same) */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App