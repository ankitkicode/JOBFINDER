const JobCard = ({ job }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex">
      <img
        src={job.companyLogo}
        alt={`${job.company} logo`}
        className="w-32 h-32 object-cover mt-4 border-r border-gray-200"
      />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.position}</h3>
        <p className="text-gray-600 mb-1">{job.company}</p>
        <p className="text-gray-500 mb-4">{job.location}</p>
        <a
          href={job.jobUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center"
        >
          View Job
        </a>
      </div>
    </div>
  );
};

export default JobCard;
