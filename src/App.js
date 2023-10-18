import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Career from './pages/Career';
import Home from './pages/Home';
import OpenRoles from './pages/OpenRoles';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/career" element={<Career />} />
        <Route path="/career/open-roles" element={<OpenRoles />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Home /> */}
    </>
  );
}

export default App;
