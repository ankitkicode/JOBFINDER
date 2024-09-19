const express = require('express');
const linkedin = require('linkedin-jobs-api');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/jobs', async (req, res) => {
  console.log(req.body);

  const queryOptions = {
    keyword: req.body.keyword,
    location: req.body.location,
    dateSincePosted: req.body.dateSincePosted,
    jobType: req.body.jobType,
    remoteFilter: req.body.remoteFilter,
    salary: req.body.salary,
    experienceLevel: req.body.experienceLevel,
    limit: req.body.limit,
    page: req.body.page,
    skills: req.body.skills, // Add skills to the query options
  };

  try {
    const response = await linkedin.query(queryOptions);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs', error });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
