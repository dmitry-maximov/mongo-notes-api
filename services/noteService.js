const Note = require('../models/note');
const FileService = require('./fileService');

class NoteService {
  async create(note, picture) {
    const fileName = FileService.saveFile(picture);
    const createdNote = await Note.create({ ...note, picture: fileName });
    return createdNote;
  }

  async getAll() {
    const notes = await Note.find();
    return notes;
  }

  async getOne(id) {
    const note = await Note.findById(id);
    return note;
  }

  async update(note) {
    const updatedNote = await Note.findByIdAndUpdate(note._id, note, {
      new: true,
    });
    return updatedNote;
  }

  async delete(id) {
    const deletedNote = await Note.findOneAndDelete(id);
    return deletedNote;
  }
}

module.exports = new NoteService();
