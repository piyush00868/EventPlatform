const express = require('express');
const router = express.Router();
const { bookEvent, confirmBooking, getMyBookings, cancelBooking, sendBookingOTP } = require('../controllers/bookingController');
const { protect, admin } = require('../middlewares/auth');
//Otp required to book
router.post('/send-otp', protect, sendBookingOTP);
//Book Event
router.post('/', protect, bookEvent);
//Confirm Booking Admin only
router.put('/:id/confirm', protect, admin, confirmBooking);
//Get Booking details
router.get('/my', protect, getMyBookings);
//Cancel booking
router.delete('/:id', protect, cancelBooking);

module.exports = router;
