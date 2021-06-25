const router = require("express").Router();
const store = require("../db/store");

//GET
router.get("/notes", async (request, response) => {
  let results = await store.getNotes();
  response.send(results);
});

//ADD NEW NOTES
router.post("/notes", async (request, response) => {
  let results = await store.addNote(request.body);
  response.send(results);
});

//DELETE NOTE BY ID
router.delete("/notes/:id", async (request, response) => {
  let results = await store.removeNote(request.params.id);
  response.send("OK");
  console.log(store);
});

module.exports = router;
