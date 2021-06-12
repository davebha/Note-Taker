const express = require("express");

//setup express
const app = express();
const PORT = 8000;

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
