const express = require('express');
const router = express.Router();
const quotationController = require('../Controllers/quotationController');

// adding a quotation
router.post('/add', quotationController.addQuotation);

//get for specific id details
router.get('/:id', quotationController.getQuotationById);

// Get all quotations
router.get('/getall', quotationController.getAllQuotations);

module.exports = router;
