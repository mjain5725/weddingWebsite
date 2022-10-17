import { Routes, Route } from 'react-router-dom';
import SelectGender from './components/SelectGender/SelectGender';
import LandingPage from './components/LandingPage/LandingPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SelectGender />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </div>
  );
};

export default App;
