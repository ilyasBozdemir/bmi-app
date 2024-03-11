import React, { useState, useEffect } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [dietPlan, setDietPlan] = useState('');

  useEffect(() => {
    if (bmi) {
      if (bmi < 18.5) {
        setDietPlan('You should consume more carbohydrates and protein.');
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setDietPlan('You should maintain a balanced diet.');
      } else if (bmi >= 24.9 && bmi < 29.9) {
        setDietPlan('You should consume less fatty and sugary foods.');
      } else {
        setDietPlan('Consult a doctor.');
      }
    }
  }, [bmi]);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const calculatedBMI = weight / (heightInMeters * heightInMeters);
    setBMI(calculatedBMI.toFixed(2));
  };

  const goBack = () => {

  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <input type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} />
      <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} />
      <button onClick={calculateBMI}>Calculate</button>
      {bmi && (
        <div>
          <p>BMI: {bmi}</p>
          <p>Diet Plan: {dietPlan}</p>
        </div>
      )}
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default BMICalculator;
