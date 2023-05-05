// UC7-Using Array Helper Function

//UC7A-Using Array foreach and reduce method

const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
const NUM_OF_WORKING_DAYS=20;
const MAX_HRS_IN_MONTH=160;


function getWorkingHours(empCheck)
{
  switch(empCheck)
  {
   case IS_PART_TIME:
         return PART_TIME_HOURS;
   case IS_FULL_TIME:
         return FULL_TIME_HOURS;
    default:
          return 0;
  }
}


let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyWageArr=new Array();
function calcDailyWage(empHrs)
{
    return empHrs*WAGE_PER_HOUR;
}
while(totalEmpHrs <=MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    
    let empCheck=Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

let empWage=calcDailyWage(totalEmpHrs);

let totalEmpWage=0;
function sum(dailyWage)
{
  totalEmpWage+=dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("Total Days: "+totalWorkingDays+" Total Hrs: "+totalEmpHrs+" Emp Wage: "+totalEmpWage);

function totalWages(totalWage, dailyWage)
{
  return totalWage+dailyWage;
}

console.log("Emp Wage with reduce: "+empDailyWageArr.reduce(totalWages,0));

