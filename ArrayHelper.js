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
// console.log("Total Days: "+totalWorkingDays+" Total Hrs: "+totalEmpHrs+" Emp Wage: "+totalEmpWage);

function totalWages(totalWage, dailyWage)
{
  return totalWage+dailyWage;
}

// console.log("Emp Wage with reduce: "+empDailyWageArr.reduce(totalWages,0));

//UC 7B - Show the day along with daily wage using Array map helper function

let dailyCntr=0;
function mapDayWithWage(dailyWage)
{
   dailyCntr++;
   return dailyCntr+" = "+dailyWage;
}

let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
// console.log("Daily Wage Map");
// console.log(mapDayWithWageArr);

//UC 7C - Shows Days when Full time wage of 160 were earned

function fulltimeWage(dailyWage)
{
   return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
// console.log("Daily Wage Filter When Fulltime Wage Earned");
// console.log(fullDayWageArr);

//UC 7D - Find the first occurence when Full Time Wage was earned using find function
function findFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
// console.log("First time Fulltime wage was earned on Day: "+mapDayWithWageArr.find(findFulltimeWage));

//UC 7E - Check if Every Element of Full Time Wage is truely holding Full time Wage
function isAllFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}

// console.log("Check All Elements have Full Time Wage: "+fullDayWageArr.every(isAllFulltimeWage));

//UC 7F - Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage)
{
   return dailyWage.includes("80");
}
// console.log("Check If Any Part Time Wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G - Find the number of Days the employee worked.
function totalDaysWorked(numOfDays, dailyWage)
{
  if(dailyWage>0) return numOfDays+1;
  return numOfDays;
}

console.log("Number of Days Emp Worked: "+empDailyWageArr.reduce(totalDaysWorked));