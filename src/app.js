const path = require("path");
const getWeather = require("../../weather-app/getWeather");
const express = require("express");
const hbs = require("hbs");
const app = express();
//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Setup handlebars engine and view location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//setup static directory
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.render("index", {
    title: "CamelTemp",
    name: "Abdulrazzak Alsssouki",
  });
});

app.get("/weather", (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.send("You must provide a city");
  }
  getWeather(city, (error, data = {}) => {
    if (error) {
      return res.send({ error });
    }
    res.send({
      city,
      data,
    });
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Abdulrazzak Alsssouki",
  });
});

app.get("/details", (req, res) => {
  res.render("details", {
    title: "Weather details",
    name: "Abdulrazzak Alsssouki",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Abdulrazzak Alsssouki",
  });
});

app.listen(3000, () => {
  console.log("Server is live on port 3000");
});
