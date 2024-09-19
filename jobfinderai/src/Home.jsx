import { useState } from 'react';
import JobSearchForm from './JobSearchForm';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [formData, setFormData] = useState({
    keyword: '',
    location: '',
    dateSincePosted: 'past Week',
    jobType: 'full time',
    remoteFilter: 'remote',
    salary: '100000',
    experienceLevel: 'entry level',
    limit: '20',
    page: '0',
    skills: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      navigate('/jobs', { state: { jobs: data || [] } });
    } catch (err) {
      setError('Error fetching jobs: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Find AI Jobs</h2>
      <JobSearchForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        loading={loading}
      />
      {error && <p className="mt-4 text-center text-red-600">{error}</p>}
    </div>
  );
};

export default Home;
