const express = require("express");
const morgan = require("morgan");

const app = express();

// register view engine
app.set("view engine", "ejs");

app.listen(3000);

// middleware & static files
app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  const blogs = [
    { title: "Lorem ipsum dolor", snippet: "Lorem ipsum dolor sit amet..." },
    { title: "Lorem ipsum dolor", snippet: "Lorem ipsum dolor sit amet..." },
    { title: "Lorem ipsum dolor", snippet: "Lorem ipsum dolor sit amet..." },
  ];
  res.render("index", { title: "Home", blogs });
});

app.use(morgan("tiny"));

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
