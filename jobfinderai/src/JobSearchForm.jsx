

const JobSearchForm = ({ formData, handleChange, handleSubmit, loading }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 md:p-8 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Keyword:</label>
          <input
            type="text"
            name="keyword"
            value={formData.keyword}
            onChange={handleChange}
            placeholder="e.g. Full-Stack Developer"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. India"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Date Since Posted:</label>
          <select
            name="dateSincePosted"
            value={formData.dateSincePosted}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="past Week">Past Week</option>
            <option value="past Month">Past Month</option>
            <option value="24hr">24hr</option>
          </select>
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Job Type:</label>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="full time">Full Time</option>
            <option value="part time">Part Time</option>
            <option value="contract">Contract</option>
            <option value="temporary">Temporary</option>
            <option value="volunteer">Volunteer</option>
            <option value="internship">Internship</option>
          </select>
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Remote Filter:</label>
          <select
            name="remoteFilter"
            value={formData.remoteFilter}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="remote">Remote</option>
            <option value="on site">On Site</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Salary:</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="e.g. 100000"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Experience Level:</label>
          <select
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="entry level">Entry Level</option>
            <option value="associate">Associate</option>
            <option value="senior">Senior</option>
            <option value="director">Director</option>
            <option value="executive">Executive</option>
          </select>
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Limit:</label>
          <input
            type="number"
            name="limit"
            value={formData.limit}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Page:</label>
          <input
            type="number"
            name="page"
            value={formData.page}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Skills:</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="e.g. JavaScript, React, Node.js"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {loading ? 'Loading...' : 'Find Jobs'}
      </button>
    </form>
  );
};

export default JobSearchForm;
