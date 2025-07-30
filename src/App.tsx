import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BottomNav from './components/ui/BottomNav';

import Insights from './pages/Insights';
import Improve from './pages/Improve';
import Trends from './pages/Trends';
import Records from './pages/Records';
import WellbeingScalePage from './pages/WellbeingScalePage';
import TestReportsPage from './pages/TestReportsPage';

function App() {
  return (
    <Router>
      <div className="pb-28 bg-gray-50 font-sans min-h-screen">
        <Routes>
          <Route path="/" element={<Navigate to="/insights" />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/improve" element={<Improve />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/records" element={<Records />} />
          <Route path="/wellbeing-scale" element={<WellbeingScalePage />} />
          <Route path="/test-reports" element={<TestReportsPage />} />
        </Routes>
        
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
