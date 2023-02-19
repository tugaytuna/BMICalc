import React from 'react'

import bmi_formula from './images/bmi_formula.png'

function BMINedir() {
  return (
    <div className='BMIinfo'>
      <h3>BMI introduction</h3>
      <p>BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for their height. Specifically, the value obtained from the calculation of BMI is used to categorize whether a person is underweight, normal weight, overweight, or obese depending on what range the value falls between. These ranges of BMI vary based on factors such as region and age, and are sometimes further divided into subcategories such as severely underweight or very severely obese. Being overweight or underweight can have significant health effects, so while BMI is an imperfect measure of healthy body weight, it is a useful indicator of whether any additional testing or action is required. Refer to the table below to see the different categories based on BMI that are used by the calculator.</p>

      <h3>Limitations of BMI</h3>
      <p>Although BMI is a widely used and useful indicator of healthy body weight, it does have its limitations. BMI is only an estimate that cannot take body composition into account. Due to a wide variety of body types as well as distribution of muscle, bone mass, and fat, BMI should be considered along with other measurements rather than being used as the sole method for determining a person's healthy body weight.</p>

      <h3>BMI formula</h3>
      <p>Below are the equations used for calculating BMI in the International System of Units (SI) and the US customary system (USC) using a 5'10", 160-pound individual as an example:</p>
      <img alt='bmi_formula' height="200px" src={bmi_formula} ></img>

    <a href='https://www.calculator.net/bmi-calculator.html'>for more information</a>


    </div>

    

  )
}

export default BMINedir