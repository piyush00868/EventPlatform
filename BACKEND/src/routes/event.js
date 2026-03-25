const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middlewares/auth');
const { getEvents, getEventById, createEvent, updateEvent, deleteEvent } = require('../controllers/eventController');
// Get All Events
router.get('/', getEvents);
//Get Events by Id
router.get('/:id', getEventById);
//Create Event Admin only
router.post('/create', protect, admin, createEvent);
//Update event Admin Only
router.put('/:id', protect, admin, updateEvent);
//Delete Event Admin Only
router.delete('/:id', protect, admin, deleteEvent);

module.exports = router;
