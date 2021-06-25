const router = require("express").Router();
const store = require("../db/store");

//GET
router.get("/notes", async (request, response) => {
  let results = await store.getNotes();
  response.send(results);
});

//ADD NEW NOTES

//DELETE NOTE BY ID

module.exports = router;
