
const express = require('express');

const app = express();
const PORT = 3000;

// Basic GET route
app.get('/', (req, res) => {
  res.json({ message: "Lab 3 setup works!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
