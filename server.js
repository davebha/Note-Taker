const express = require("express");

//setup express
const app = express();
const PORT = 8000;

const indexUrl = `${__direname}/public`;

app.use(
  express.static(indexUrl, {
    extensions: ["html", "htm"]
  })
);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
