const Router = require('express');
const NoteController = require('../controllers/noteController');

const router = new Router();

router.post('/notes', NoteController.create);
router.get('/notes', NoteController.getAll);
router.get('/notes/:id', NoteController.getOne);
router.put('/notes', NoteController.update);
router.delete('/notes/:id', NoteController.delete);

module.exports = router;
