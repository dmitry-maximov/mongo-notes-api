const NoteService = require('../services/noteService');

class NoteController {
  async create(req, res, next) {
    const note = await NoteService.create(req.body);
    return res.json(note);
  }

  async getAll(req, res, next) {
    const notes = await NoteService.getAll();
    return res.json(notes);
  }

  async getOne(req, res, next) {
    const { id } = req.params;
    const note = await NoteService.getOne(id);
    return res.json(note);
  }

  async update(req, res, next) {
    const updatedNote = await NoteService.update(req.body);
    return res.json(updatedNote);
  }

  async delete(req, res) {
    const { id } = req.params;
    const note = await NoteService.delete(id);
    return res.json(note);
  }
}

module.exports = new NoteController();
