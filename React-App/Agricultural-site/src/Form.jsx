import React, { useState } from 'react';
import './Form.css';
import 'axios';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    Nitrogen: 105.0,
    Phosphorus: 14.0,
    Potassium: 50.0,
    Temperature: 26.2148837,
    Humidity: 87.6883982,
    pH_Value: 6.419052193,
    Rainfall: 59.65590798
  });

  const [prediction, setPrediction] = useState(null);
  const jfif = ['KidneyBeans','MothBeans','PigeonPeas','Blackgram']
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post('http://localhost:5000/classify', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      setPrediction({
        text: `${response.data.predicted_crop}`
      });
    } catch (error) {
      console.error('Error:', error.response.data.error);
    }
  };

  const inputPairs = [
    ['Nitrogen', 'Phosphorus'],
    ['Potassium', 'Temperature'],
    ['Humidity', 'pH_Value'],
    ['Rainfall']
  ];

  return (
    <div className="container">
      <div className="form-container">
        <div className="card p-4 shadow-sm">
          <h2 className="card-title text-center mb-4">Your Soil Element Info</h2>
          <form onSubmit={handleSubmit}>
            {inputPairs.map((pair, index) => (
              <div className="form-row row mb-3" key={index}>
                {pair.map((key) => (
                  <div className="form-group col-md-6" key={key}>
                    <label htmlFor={key} className="form-label">{key.replace(/_/g, ' ')}</label>
                    <input
                      type="number"
                      id={key}
                      name={key}
                      className="form-control"
                      value={formData[key]}
                      onChange={handleChange}
                      step="any"
                    />
                  </div>
                ))}
              </div>
            ))}
            <button type="submit" className="btn btn-primary text-center ">Submit</button>
          </form>
        </div>
      </div>
      <div className="result-container">
        {prediction ? (
          <>
          <h2>Best Crop under the Given Conditions : <strong>{prediction.text}</strong></h2> 
            <img src={jfif.includes(prediction.text)?`/crops/${prediction.text}.jfif`:`/crops/${prediction.text}.jpg`} alt="Prediction" className="result-image"  style={{width:'500px',height:'400px'}}/>
            
          </>
         ) : (
          <p>No prediction yet</p>
        )} 
      </div>
    </div>
  );
};

export default Form;
