const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const {
  createDocument,
  getDocuments,
  updateDocument,
  deleteDocument,
} = require('../controllers/documentController');
const router = express.Router();

router.route('/')
  .post(protect, createDocument)
  .get(protect, getDocuments);

router.route('/:id')
  .put(protect, updateDocument)
  .delete(protect, deleteDocument);

module.exports = router;
