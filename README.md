# Loan Calculator
# Instructions
  If you want to run it in your machine: 
  
      git clone git@github.com:jopemoma/loan-calculator.git
      
      npm install
      
      npm start
# React
I chose React to create an interface easy to use for the user and with the posibility of expansion for new types of loans or different interest rates. I didn't create a back-end for this task because I'm not storing any information. 
# Deployment
  It is deployed at netlify and connected to the main branch of this repository to change automatically:
  
# Work Methodology
I started the project in the development branch. When I was satisfy with the functionality, I merged it to the main branch. This branch is also used for the deployment in netlify, any change done there will automatically update the deployed version.
# Tests
I didn't follow a Test-driven development (TDD) methodology due to the time limit for the complition of the project. But I have set up a test framework to be able to test the util functions with Mocha and Chai and the React compomonents with Jest and Enzyme
# Loan Scheme implemented:

When selecting amount and payback time, the application generates a monthly payback plan based on the series loan principle. You pay back an equal amount  of principal each
month and add the generated interest based on the principal left and the anual interest. The interest is calculated every month. The amortisation schedule, showes the amount of principal
and the amount of interest that comprise each payment until the loan is paid off at the end of its term.

# loan-calculator
