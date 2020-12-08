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

console.log(employees);

function employeeLoop(array) {
  for (let i = 0; i < array.length; i++) {
    console.log('Testing:', bonusCalculator(array[i]));
  }
} // end employeeLoop

// call function to test
employeeLoop(employees);

// Steps break down
// for loop to loop over employee array and input into function
// log each employee

// function that takes each employee object and returns a new object 
// The 'name' property should contain the employee's name.
// The 'bonusPercentage' property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
// The 'totalCompensation' property should be the adjusted annual compensation (base annual + bonus)
// The 'totalBonus' should be the employee's total bonus rounded to the nearest dollar.


function bonusCalculator(employee) {
  let totalCompen = 0;
  let bonusPercent = 0;
  let bonus = 0;

  if (employee.employeeNumber.length === 4 && employee.annualSalary > 65000) {
    if (employee.reviewRating <= 2) {
      bonus = employee.annualSalary * 0.04;
      totalCompen = Number(employee.annualSalary) + bonus;
      bonusPercent = 0.04;
    } else if (employee.reviewRating === 3) {
      bonus = employee.annualSalary * 0.08;
      totalCompen = Number(employee.annualSalary) + bonus;
      bonusPercent = 0.08;
    } else if (employee.reviewRating === 4) {
      bonus = employee.annualSalary * 0.10;
      totalCompen = Number(employee.annualSalary) + bonus;
      bonusPercent = 0.10;
    } else if (employee.reviewRating === 5) {
      bonus = employee.annualSalary * 0.13;
      totalCompen = Number(employee.annualSalary) + bonus;
      bonusPercent = 0.13;
    } else {
      console.log('ERROR');

    }
  } else if (employee.employeeNumber.length === 4) {
    if (employee.reviewRating <= 2) {
      bonus = employee.annualSalary * 0.05;
      totalCompen = Number(employee.annualSalary) + bonus;
      bonusPercent = 0.05;
    } else if (employee.reviewRating === 3) {
      bonus = employee.annualSalary * 0.09;
      totalCompen = Number(employee.annualSalary) + bonus;
      bonusPercent = 0.09;
    } else if (employee.reviewRating === 4) {
      bonus = employee.annualSalary * 0.11;
      totalCompen = Number(employee.annualSalary) + bonus;
      bonusPercent = 0.11;
    } else if (employee.reviewRating === 5) {
      bonus = employee.annualSalary * 0.13;
      totalCompen = Number(employee.annualSalary) + bonus;
      bonusPercent = 0.13;
    } else {
      console.log('ERROR');
    }
  } else if (employee.annualSalary > 65000) {
    if (employee.reviewRating <= 2) {
      bonus = 0;
      totalCompen = Number(employee.annualSalary) + bonus;
      bonusPercent = 0;
    } else if (employee.reviewRating === 3) {
      bonus = employee.annualSalary * 0.03;
      totalCompen = Number(employee.annualSalary) + bonus;
      bonusPercent = 0.03;
    } else if (employee.reviewRating === 4) {
      bonus = employee.annualSalary * 0.05;
      totalCompen = Number(employee.annualSalary) + bonus;
      bonusPercent = 0.05;
    } else if (employee.reviewRating === 5) {
      bonus = employee.annualSalary * 0.09;
      totalCompen = Number(employee.annualSalary) + bonus;
      bonusPercent = 0.09;
    } else {
      console.log('ERROR');
    }
  } else {
    if (employee.reviewRating <= 2) {
      bonus = 0;
      totalCompen = Number(employee.annualSalary) + bonus;
      bonusPercent = 0;
    } else if (employee.reviewRating === 3) {
      bonus = employee.annualSalary * 0.04;
      totalCompen = Number(employee.annualSalary) + bonus;
      bonusPercent = 0.04;
    } else if (employee.reviewRating === 4) {
      bonus = employee.annualSalary * 0.06;
      totalCompen = Number(employee.annualSalary) + bonus;
      bonusPercent = 0.06;
    } else if (employee.reviewRating === 5) {
      bonus = employee.annualSalary * 0.10;
      totalCompen = Number(employee.annualSalary) + bonus;
      bonusPercent = 0.10;
    } else {
      console.log('ERROR');
    }
  }
  return {name: employee.name, bonusPercentage: bonusPercent, totalCompensation: totalCompen, totalBonus: bonus};
} // end bonusCalculator


// console.log('testing bonusCalulator function', bonusCalculator(employees[0])); // Should be 4230
// console.log('testing bonusCalulator function', bonusCalculator(employees[1])); // Should be 3810
// console.log('testing bonusCalulator function', bonusCalculator(employees[2])); // Should be 9717.5

// Bonus function (if else)
// Those who have a rating of a 2 or below should not receive a bonus.
// Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
// Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
// Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.


// If their employee number is 4 digits long, this means they have been with the company for longer than 15 years, and should receive an additional 5%.

// However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
// No bonus can be above 13% or below 0% total.

// conditions
// - 4 digit number && salary > 65k
// - 4 digit number
// - salary > 65k
// - none of the above