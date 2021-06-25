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
module.exports = router;
