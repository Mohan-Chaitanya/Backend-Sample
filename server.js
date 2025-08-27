const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Render!");
});

app.get("/llm", (req, res) => {
  res.send("Request sent to LLM");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
