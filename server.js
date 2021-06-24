const { request } = require("express");
const express = require("express");

//setup express
const app = express();
const PORT = 8000;

//setup routes

/*const indexUrl = `${__dirname}/public`;

app.use(
  express.static(indexUrl, {
    extensions: ["html", "htm"]
  })
);

app.get("*", (request, response) => {
  response.redirect("/index.html");
});
app.get("/notes", (request, response) => {
  response.redirect(`/notes.html`);
});*/

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
