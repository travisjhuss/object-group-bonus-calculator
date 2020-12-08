const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

function employeeLoop (array) {
  for (let i = 0; i < array.length; i++) {
    newObjects(array[i]);
  }
} // end employeeLoop

// call function to test
// employeeLoop(employees);

// Steps break down
// for loop to loop over employee array and input into function
// log each employee

// function that takes each employee object and returns a new object 
// The 'name' property should contain the employee's name.
// The 'bonusPercentage' property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
// The 'totalCompensation' property should be the adjusted annual compensation (base annual + bonus)
// The 'totalBonus' should be the employee's total bonus rounded to the nearest dollar.


function bonusCalculator(employee) {

  let bonus = 0;
  if (employee.reviewRating <= 2) {
    bonus = 0;
    return bonus;
  } else if (employee.reviewRating = 3) {
      bonus = employee.annualSalary * 0.04;
      return bonus;
  } else if (employee.reviewRating = 4) {
      bonus = employee.annualSalary * 0.06;
      return bonus;
  } else if (employee.reviewRating = 5) {
      bonus = employee.annualSalary * 0.10;
      return bonus;
  } else {
      console.log('ERROR');
  }
}// end bonusCalculator


console.log('testing bonusCalulator function', bonusCalculator(employees[0]));

// Bonus function (switch...case)
// Those who have a rating of a 2 or below should not receive a bonus.
// Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
// Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
// Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
// If their employee number is 4 digits long, this means they have been with the company for longer than 15 years, and should receive an additional 5%.
// However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
// No bonus can be above 13% or below 0% total.
