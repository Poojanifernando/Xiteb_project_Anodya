
const Prescription = require('../Model/Prescription');

const uploadPrescription = async (req, res) => {
  try {
    // Extract prescription data from the request body
    const { userId, images, note, deliveryAddress, deliveryTime } = req.body;

    // Create a new prescription
    const prescription = new Prescription({
      userId,
      images,
      note,
      deliveryAddress,
      deliveryTime,
    });

    // Save the prescription to the database
    await prescription.save();

    // Send a success response
    res.status(201).json({ message: 'Prescription uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



const getAllPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find();
    res.status(200).json(prescriptions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
module.exports = { uploadPrescription, getAllPrescriptions  };
