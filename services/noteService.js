const note = require('../models/note');
const Note = require('../models/note');

class NoteService {
  async create(note) {
    const createdNote = await Note.create(note);
    return createdNote;
  }

  async getAll() {
    const notes = await Note.find();
    return notes;
  }

  async getOne(id) {
    const note = await note.find(id);
    return note;
  }

  async update(note) {
    if (!note._id) throw new Error('Id не указан');

    const updatedNote = await Note.findOneAndUpdate(note._id, note, {
      new: true,
    });
    return updatedNote;
  }

  async delete(id) {
    const deletedNote = await Note.findOneAndDelete(id);
    return deletedNote;
  }
}

module.export = new NoteService();
