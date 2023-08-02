const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

// ROUTE 1: Get All the Notes using GET "/api/notes/fetchalluser". Login Required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });

    res.json(notes);
  } catch (errors) {
    console.log(error.message);
    res.status(500).send("bhai sahaab interner server error");
  }
});
// ROUTE 2: Add a New Note using POST "/api/notes/addnote". Login Required

router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      // If there are errors, return bad request and error
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const notes = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await notes.save();

      res.json(savedNote);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("interner server error");
    }
  }
);

// ROUTE 3: Update an existing Note using PUT "/api/notes/updatenote". Login Required

router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  // Create New note object
  try {
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    // Find the note to be updated and update it.
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("not found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("not allowed");
    }
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.send(note);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("interner server error");
  }
});

// ROUTE 4: Delte an existing  Note using DELETE "/api/notes/deletenote". Login Required

router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    // Find the note to be deleted and delete it.
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("not found");
    }
    // Allow deleting only if user owns this note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("not allowed");
    }
    note = await Note.findByIdAndDelete(req.params.id);
    res.send({ Success: "Notes have been deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("interner server error");
  }
});
module.exports = router;
