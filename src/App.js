import React, { useState, useEffect } from 'react';

const App = () => {
  const [formFields, setFormFields] = useState([]);
  const [formType, setFormType] = useState('');

  const apiResponses = {
    'User Information': {
      fields: [
        { name: 'firstName', type: 'text', label: 'First Name', required: true },
        { name: 'lastName', type: 'text', label: 'Last Name', required: true },
        { name: 'age', type: 'number', label: 'Age', required: false },
      ],
    },
    'Address Information': {
      fields: [
        { name: 'street', type: 'text', label: 'Street', required: true },
        { name: 'city', type: 'text', label: 'City', required: true },
        { name: 'state', type: 'dropdown', label: 'State', options: ['California', 'Texas', 'New York'], required: true },
        { name: 'zipCode', type: 'text', label: 'Zip Code', required: false },
      ],
    },
    "Payment Information": {
        fields: [
          { name: "cardNumber", type: "text", label: "Card Number", required: true },
          { name: "expiryDate", type: "date", label: "Expiry Date", required: true },
          { name: "cvv", type: "password", label: "CVV", required: true },
          { name: "cardholderName", type: "text", label: "Cardholder Name", required: true },
        ],
      },
    
  };

  useEffect(() => {
    if (formType) setFormFields(apiResponses[formType].fields || []);
  }, [formType]);

  return (
    <div>
      <h1>Dynamic Form</h1>
      <select onChange={(e) => setFormType(e.target.value)} value={formType}>
        <option value="">Select Form Type</option>
        {Object.keys(apiResponses).map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <form>
        {formFields.map((field) => (
          <div key={field.name}>
            <label>{field.label}</label>
            {field.type === 'dropdown' ? (
              <select name={field.name} required={field.required}>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input type={field.type} name={field.name} required={field.required} />
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
