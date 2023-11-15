
const express = require('express');

const router = express.Router();

const prescriptionController = require('../Controllers/precreptionController');

// Example endpoint for uploading a prescription
router.post('/upload', prescriptionController.uploadPrescription);
router.get('/allPrescription', prescriptionController.getAllPrescriptions);

module.exports = router;
