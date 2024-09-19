import { useLocation } from 'react-router-dom';
import JobCard from './JobCard';

const JobsList = () => {
  const location = useLocation();
  const jobs = location.state?.jobs || [];

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Job Listings</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))
        ) : (
          <p className="text-center text-gray-600">No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default JobsList;
