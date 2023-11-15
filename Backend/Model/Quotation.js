const mongoose = require("mongoose");

const QuotationSchema = new mongoose.Schema({
  prescriptionId: {
    type: mongoose.Schema.Types.ObjectId,
    // Reference to the Prescription model for linking quotations to prescriptions
    ref: 'Prescription', 
    required: true,
  },
  drugs: [
    {
      drugName: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      amountPerUnit: {
        type: Number,
        required: true,
      },
      totalAmount: {
        type: Number,
        required: true,
      },
    },
  ],
  totalCost: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Quotation = mongoose.model("Quotation", QuotationSchema);

module.exports = Quotation;
