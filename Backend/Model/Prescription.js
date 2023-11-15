const mongoose = require("mongoose");

const PrescriptionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model for linking prescriptions to users
    required: true,
  },
  images: {
    type: [String], // Array to store multiple image URLs
    validate: {
      validator: function (v) {
        return v.length <= 5; // Maximum 5 images allowed
      },
      message: "Maximum of 5 images allowed",
    },
  },
  note: {
    type: String,
    required: true,
  },
  deliveryAddress: {
    type: String,
    required: true,
  },
  deliveryTime: {
    type: String,
    enum: ["08:00 AM - 10:00 PM","10:00 AM - 12:00 PM", "12:00 PM - 2:00 PM", "2:00 PM - 4:00 PM", "4:00 PM - 6:00 PM"], // 2-hour time slots
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Prescription = mongoose.model("Prescription", PrescriptionSchema);

module.exports = Prescription;
