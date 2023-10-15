import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Career from './pages/Career';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/career" element={<Career />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Home /> */}
    </>
  );
}

export default App;
