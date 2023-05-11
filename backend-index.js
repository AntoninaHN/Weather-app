const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.json("hi");
});

app.get("/weather", async (req, res) => {
  await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
    .then(function (response) {
      res.json(response.data);
    });
});

app.get("/image", async (req, res) => {
  await axios
    .get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: process.env.REACT_APP_IMG_KEY,
      },
      params: {
        query: req.query.city,
        per_page: 1,
      },
    })
    .then(function (response) {
      res.json(response.data);
    });
});

app.listen(8000, () => console.log(`Backend:${PORT}`));
