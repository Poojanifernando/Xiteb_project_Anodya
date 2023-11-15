//this page is to get all the predcription details and images 
// also phamacy can add the quatation for the each user

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GetPrescription.css';

const GetPrescription = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [addedDetails, setAddedDetails] = useState({});

  useEffect(() => {
    // Fetch prescriptions when the component mounts
    const fetchPrescriptions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/prescription/allPrescription');
        setPrescriptions(response.data);
      } catch (error) {
        console.error('Error fetching prescriptions:', error);
      }
    };

    fetchPrescriptions();

    // Retrieve added details from localStorage
    const storedDetails = localStorage.getItem('addedDetails');
    if (storedDetails) {
      setAddedDetails(JSON.parse(storedDetails));
    }
  }, []); // Empty dependency array to run the effect only once on mount

  const handleAddDetails = async (e, prescriptionId, drugName, quantity, amountPerUnit) => {
    e.preventDefault();
    try {
      // Calculate totalAmount
      const totalAmount = quantity * amountPerUnit;

      // Create a copy of the existing addedDetails or initialize if not present
      const updatedDetails = { ...(addedDetails[prescriptionId] || {}) };

      // Add the new drug details
      updatedDetails[drugName] = { quantity, amountPerUnit, totalAmount };

      // Update the addedDetails state
      setAddedDetails({ ...addedDetails, [prescriptionId]: updatedDetails });

      // Save added details to localStorage
      localStorage.setItem('addedDetails', JSON.stringify({ ...addedDetails, [prescriptionId]: updatedDetails }));

      // Make a request to your backend to add the details to the prescription
      const response = await axios.post('http://localhost:5000/quotation/add', {
        prescriptionId,
        drugs: [
          {
            drugName,
            quantity,
            amountPerUnit,
            totalAmount,
          },
        ],
      });

      // Handle the response
      alert(response.data.message);

    } catch (error) {
      console.error('Error adding details:', error);
      // Handle error, e.g., show an error message
      alert('Error adding details. Please check the console for details.');
    }
  };


  return (
    <div>
      <center>
        <h2>Prescriptions</h2>
      </center>
      {prescriptions.map((prescription) => (
        <div key={prescription._id} className="prescription-card">
          <div className="prescription-details">
            <div className="left-section">
              <h3>User ID: {prescription.userId}</h3>
              <p>Note: {prescription.note}</p>
              <p>Delivery Address: {prescription.deliveryAddress}</p>
              <p>Delivery Time: {prescription.deliveryTime}</p>
              <div className="details-input-container">
                <p>Images:</p>
                <div className="image-container">
                  {prescription.images.map((image, index) => (
                    <img key={index} src={image} alt={`Prescription Image ${index + 1}`} />
                  ))}
                </div>

                <form className="formLabel">
                  <div>
                    <label>
                      Drug Name:
                      <input class="form-control" type="text" name={`drugName_${prescription._id}`} />
                    </label>
                  </div>

                  <div>
                    <label>
                      Quantity:
                      <input
                        type="number"
                        class="form-control"
                        name={`quantity_${prescription._id}`}
                        onChange={(e) => {
                          const amountPerUnitInput = document.getElementsByName(
                            `amountPerUnit_${prescription._id}`
                          )[0];
                          const totalAmountInput = document.getElementsByName(
                            `totalAmount_${prescription._id}`
                          )[0];
                          const amountPerUnit = parseFloat(amountPerUnitInput.value || 0);
                          const quantity = parseFloat(e.target.value || 0);
                          totalAmountInput.value = (quantity * amountPerUnit).toFixed(2);
                        }}
                      />
                    </label>
                  </div>

                  <div>
                    <label>
                      Amount Per Unit:
                      <input
                        type="text"
                        class="form-control"
                        name={`amountPerUnit_${prescription._id}`}
                        onChange={(e) => {
                          const quantityInput = document.getElementsByName(`quantity_${prescription._id}`)[0];
                          const totalAmountInput = document.getElementsByName(
                            `totalAmount_${prescription._id}`
                          )[0];
                          const quantity = parseFloat(quantityInput.value || 0);
                          const amountPerUnit = parseFloat(e.target.value || 0);
                          totalAmountInput.value = (quantity * amountPerUnit).toFixed(2);
                        }}
                      />
                    </label>
                  </div>

                  <div>
                    <label>
                      Total Amount:
                      <input
                        type="text"
                        class="form-control"
                        name={`totalAmount_${prescription._id}`}
                        readOnly
                      />
                    </label>
                  </div>

                  <br />
                  <button
                    onClick={(e) =>
                      handleAddDetails(
                        e,
                        prescription._id,
                        document.getElementsByName(`drugName_${prescription._id}`)[0].value,
                        document.getElementsByName(`quantity_${prescription._id}`)[0].value,
                        document.getElementsByName(`amountPerUnit_${prescription._id}`)[0].value
                      )
                    }
                  >
                    Add Details
                  </button>
                </form>
              </div>
            </div>
          

            <div className="added-details-container">
              <h4>Added Details:</h4>
              {addedDetails[prescription._id] &&
                Object.entries(addedDetails[prescription._id]).map(([drugName, details]) => (
                  <div key={drugName}>
                    <p>
                      {drugName}: Quantity - {details.quantity}, Amount Per Unit - {details.amountPerUnit}, Total
                      Amount - {details.totalAmount.toFixed(2)}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          <hr />
        </div>
      ))}
       
    </div>
  );
};

export default GetPrescription;
