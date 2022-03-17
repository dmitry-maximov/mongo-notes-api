const NoteService = require('../services/noteService');
const ApiError = require('../handlers/errors');

class NoteController {
  async create(req, res, next) {
    try {
      const note = await NoteService.create(req.body);
      return res.json(note);
    } catch (err) {
      return next(ApiError.internalServer(err));
    }
  }

  async getAll(req, res, next) {
    try {
      const notes = await NoteService.getAll();
      return res.json(notes);
    } catch (err) {
      return next(ApiError.internalServer(err));
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      if (!id) {
        return next(ApiError.badRequest('не передан параметр id'));
      }
      const note = await NoteService.getOne(id);
      return res.json(note);
    } catch (err) {
      return next(ApiError.internalServer(err));
    }
  }

  async update(req, res, next) {
    try {
      const updatedNote = await NoteService.update(req.body);
      return res.json(updatedNote);
    } catch (err) {
      return next(ApiError.internalServer(err));
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return next(ApiError.badRequest('не передан параметр id'));
      }
      const note = await NoteService.delete(id);
      return res.json(note);
    } catch (err) {
      return next(ApiError.internalServer(err));
    }
  }
}

module.exports = new NoteController();
