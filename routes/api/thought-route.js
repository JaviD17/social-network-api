const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

router.route('/').get(getAllThought);

router.route("/:userId").get(getThoughtById).post(createThought);

router.route("/:userId/:thoughtId").put(createReaction).delete(deleteThought);

router.route("/:userId/:thoughtId/:reactionId").delete(deleteReaction);

module.exports = router;
