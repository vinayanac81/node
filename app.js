import express from "express";

const app = express();

const PORT = 1009;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Express Application</h1>");
});

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
