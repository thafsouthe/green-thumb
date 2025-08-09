const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// 1) Middleware: logger
app.use(morgan("dev"));

// 2) Middleware: static files
app.use(express.static(path.join(__dirname, "public")));

// 3) Middleware: parse form data (for contact form POST)
app.use(express.urlencoded({ extended: true }));

// 4) Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 5) Middleware: working hours (Mon–Fri, 9–17)
app.use((req, res, next) => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hour = now.getHours();

  const isWeekday = day >= 1 && day <= 5;
  const isWorkingHour = hour >= 9 && hour < 17;

  if (isWeekday && isWorkingHour) {
    next();
  } else {
    res.render("closed", { page: "closed" });
  }
});

// 6) Routes
app.get("/", (req, res) => {
  res.render("home", { page: "home" });
});

app.get("/services", (req, res) => {
  res.render("services", { page: "services" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { page: "contact" });
});

// Handle contact form submission
app.post("/contact", (req, res) => {
  const { name, message } = req.body;
  console.log(`Message received from ${name}: ${message}`);
  res.send(`<h1>Thank you, ${name}!</h1><p>Your message has been received.</p><a href="/">Back to Home</a>`);
});

// 7) Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
