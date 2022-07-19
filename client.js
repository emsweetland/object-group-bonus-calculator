$ (document).ready(readyNow);

function readyNow(){
  $('#calculate').on('click', onClick);
}

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

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

for (let person of employees){
  console.log(calcBonus(person))
}

function calcBonus (person){
  let upd8 = {};
      upd8.name = person.name;
      //console.log('ratingBonus is',ratingBonus(person))
      upd8.bonus = ratingBonus(person);
      //console.log('Total to subtract from Bonus', upd8.bonus*(salaryBonus(person)));
      upd8.bonus -= upd8.bonus*(salaryBonus(person));
      upd8.bonus += numberBonus(person);
      upd8.totalBonus = Math.round(upd8.bonus);
      //console.log('Current Bonus is', upd8.bonus);
      //console.log('13 percent of salary is', .13 * person.annualSalary);
      if (upd8.totalBonus > .13 * person.annualSalary){
        upd8.bonus = .13 * person.annualSalary;
      }
      upd8.totalComp = upd8.totalBonus + Number(person.annualSalary);
  return upd8;
}

// console.log(calcBonus(employees[2]));

function ratingBonus (employee){
let bonus = 0;
 if (employee.reviewRating <= 2){
  bonus = 0;};
 if (employee.reviewRating === 3){
  bonus = employee.annualSalary *.04;};
 if (employee.reviewRating === 4){
  bonus = employee.annualSalary  *.06;};
  if (employee.reviewRating === 5){
  bonus = employee.annualSalary * .1;};
  return bonus}

function salaryBonus (employee){
  let factor = 0;
  if (employee.annualSalary >= 65000){
    factor = -.01;
  }
  return factor;
}

function numberBonus (employee){
  let bonus = 0;
  //console.log(employee.employeeNumber);
  if (employee.employeeNumber < 10000 && employee.employeeNumber > 999){
   bonus += employee.annualSalary * .05
  }
  return bonus;
}


function onClick(){
  let el=$('#bonuses');
  el.empty();
  for (let person of employees){
   console.log(calcBonus(person));
    el.append(`<li>`+ calcBonus(person).name, 'Bonus: ', calcBonus(person).totalBonus,', Total Comp: ', 
    calcBonus(person).totalComp);
  }
};












