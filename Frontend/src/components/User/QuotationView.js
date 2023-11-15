// this page is for view the created quotation

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuotationView = ({ prescriptionId }) => {
  const [quotationDetails, setQuotationDetails] = useState(null);

  useEffect(() => {
    const fetchQuotationDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/quotation/${prescriptionId}`);
        setQuotationDetails(response.data);
      } catch (error) {
        console.error('Error fetching quotation details:', error);
      }
    };

    fetchQuotationDetails();
  }, [prescriptionId]);

  return (
    <div>
      <h2>Prescription Details for Prescription ID: {prescriptionId}</h2>
      {quotationDetails ? (
        <div>
          {/* Render the  details here based on the structure of the data */}
          <p>Total Cost: {quotationDetails.totalCost}</p>
          <p>Drugs:</p>
          <ul>
            {quotationDetails.drugs.map((drug, index) => (
              <li key={index}>
                {drug.drugName} - Quantity: {drug.quantity}, Amount Per Unit: {drug.amountPerUnit}, Total Amount: {drug.totalAmount}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default QuotationView;
