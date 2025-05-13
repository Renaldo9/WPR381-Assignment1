// app.js

const express = require("express");
const path = require("path");
const pageRoutes = require("./routes/pageRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static('public'));
app.use("/", pageRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
