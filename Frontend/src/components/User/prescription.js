// this page is for add predcription by the user

import React, { useState } from 'react';
import axios from 'axios';

const Prescription = () => {
  const [prescriptionData, setPrescriptionData] = useState({
    userId: '6552befb1a96599c3a8f40d8',
    images: [],
    note: '',
    deliveryAddress: '',
    deliveryTime: '',
  });

  const handleInputChange = (e) => {
    setPrescriptionData({ ...prescriptionData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 5) {
      // Handle the case where more than 5 images are selected
      console.error('Maximum of 5 images allowed');
      return;
    }

    // Read each image file and convert it to a data URL
    const imagePromises = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.readAsDataURL(file);
      });
    });

    // Wait for all image files to be read
    Promise.all(imagePromises)
      .then((imageDataUrls) => {
        // Update the images array in the state with the data URLs
        setPrescriptionData({ ...prescriptionData, images: imageDataUrls });
      })
      .catch((error) => {
        console.error('Error reading image files:', error);
      });
  };

  const handlePrescriptionUpload = async () => {
    try {
      await axios.post('http://localhost:5000/prescription/upload', prescriptionData);
      // Handle successful prescription upload, e.g., redirect or show a success message
      alert('Prescription uploaded successfully');
    } catch (error) {
      console.error('Prescription upload failed:', error);
      // Handle prescription upload error, e.g., show an error message
      alert('Prescription upload failed. Please check the console for details.');
    }
  };
  
  return (
    <center>
    <div>
      <h2>Prescription Upload</h2>
      <form>
        <label>
          Note:
          <input type="text" 
            class="form-control" 
          name="note" value={prescriptionData.note} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Delivery Address:
          <input type="text" 
            class="form-control" 
          name="deliveryAddress" value={prescriptionData.deliveryAddress} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Delivery Time:
          <select name="deliveryTime" 
            class="form-control" 
          value={prescriptionData.deliveryTime} onChange={handleInputChange}>
            <option value="">Select Delivery Time</option>
            <option value="08:00 AM - 10:00 PM">08:00 AM - 10:00 PM</option>
            <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
            <option value="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</option>
            <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
            <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
          </select>
        </label>
        <br />
        <label>
          Upload Images:
          <input type="file" 
            class="form-control" name="images" multiple onChange={handleImageChange} />
        </label>  
        <br/> <br /> 
        <button type="button" onClick={handlePrescriptionUpload}>
          Upload Prescription
        </button>
      </form>
      <br />   <br/><br />   <br/>
    </div>
    </center>
  );
};

export default Prescription;
