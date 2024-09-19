import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import JobsList from './JobsList';
import './index.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobsList />} />
      </Routes>
    </Router>
  );
}

export default App;
