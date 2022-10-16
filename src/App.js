import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SelectGender from './components/SelectGender/SelectGender';
import LandingPage from './components/LandingPage/LandingPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SelectGender />} />
        <Route path="/nav" element={<NavBar />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </div>
  );
};

export default App;
