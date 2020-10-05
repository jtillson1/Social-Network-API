//you can combinethe routes because we defined their 
//functionality in user-controller.js
const router = require('express').Router();

const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought
} = require('../../controllers/thought-controller');

//GET all thoughts ( /api/thoughts )
router
  .route('/')
  .get(getAllThought);

//GET thought by :id ( /api/thoughts/:id )
router
  .route('/thoughtId')
  .get(getThoughtById);

//POST to add thought ( /api/thoughts/:userId )
router
  .route('/:userId').post(createThought);

//PUT and DELETE thought ( /api/thoughts/:userId/:thoughtId )
router
.route('/:userId/:thoughtId')
.put(updateThought)
.delete(deleteThought);

module.exports = router;
