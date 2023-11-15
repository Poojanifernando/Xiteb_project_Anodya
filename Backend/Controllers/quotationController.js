const mongoose = require("mongoose");
const Quotation = require('../Model/Quotation');

const addQuotation = async (req, res) => {
  try {
    // Extract quotation data from the request body
    const { prescriptionId, drugs } = req.body;

    // Calculate totalCost based on the sum of totalAmount for each drug
    const totalCost = drugs.reduce((total, drug) => total + drug.totalAmount, 0);

    // Create a new quotation
    const quotation = new Quotation({
        prescriptionId: new mongoose.Types.ObjectId(prescriptionId),
        drugs,
        totalCost,
      });
      

    // Save the quotation to the database
    await quotation.save();

    // Send a success response
    res.status(201).json({ message: 'Quotation added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};





const getQuotationById = async (req, res) => {
  try {
    const quotationId = req.params.id;

    // Validate if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(quotationId)) {
      return res.status(400).json({ error: 'Invalid Quotation ID' });
    }

    const quotation = await Quotation.findById(quotationId);

    if (!quotation) {
      return res.status(404).json({ error: 'Quotation not found' });
    }

    res.status(200).json(quotation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const getAllQuotations = async (req, res) => {
  try {
    const quotations = await Quotation.find();
    res.status(200).json(quotations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { addQuotation, getQuotationById, getAllQuotations };
