import React from 'react'

function BMINedir() {
  return (
    <div>
      <hr></hr>
      <h3>BMI introduction</h3>
      <p>BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for their height. Specifically, the value obtained from the calculation of BMI is used to categorize whether a person is underweight, normal weight, overweight, or obese depending on what range the value falls between. These ranges of BMI vary based on factors such as region and age, and are sometimes further divided into subcategories such as severely underweight or very severely obese. Being overweight or underweight can have significant health effects, so while BMI is an imperfect measure of healthy body weight, it is a useful indicator of whether any additional testing or action is required. Refer to the table below to see the different categories based on BMI that are used by the calculator.</p>

      <h3>Limitations of BMI</h3>
      <p>Although BMI is a widely used and useful indicator of healthy body weight, it does have its limitations. BMI is only an estimate that cannot take body composition into account. Due to a wide variety of body types as well as distribution of muscle, bone mass, and fat, BMI should be considered along with other measurements rather than being used as the sole method for determining a person's healthy body weight.</p>

      <h3>BMI formula</h3>
      <p>Below are the equations used for calculating BMI in the International System of Units (SI) and the US customary system (USC) using a 5'10", 160-pound individual as an example:</p>
      <img alt='bmi_formula' height="200px" src='data:image/png;base64,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' ></img>

    <a href='https://www.calculator.net/bmi-calculator.html'>for more information</a>


    </div>

    

  )
}

export default BMINedir