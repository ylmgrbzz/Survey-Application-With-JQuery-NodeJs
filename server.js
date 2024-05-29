const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/submit-survey", (req, res) => {
  const surveyData = req.body;

  console.log("Survey Data:", surveyData);
  res.json({
    data: surveyData,
    success: true,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
