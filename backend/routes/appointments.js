const express = require('express');
const router = express.Router();
const {
  getAllAppointments,
  createAppointment,
} = require('../controllers/appointments');

router.get('/', getAllAppointments);
router.post('/', createAppointment);

module.exports = router;
