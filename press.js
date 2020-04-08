var sheds = [
    {
        name: "Shed A",
        numberOfCows: 34,
        averageProd: 15
    },
    {
        name: "Shed B",
        numberOfCows: 11,
        averageProd: 28
    },
    {
        name: "Shed C",
        numberOfCows: 27,
        averageProd: 18
    },
    {
        name: "Shed D",
        numberOfCows: 52,
        averageProd: 11
    }
];
var numberOfSheds = sheds.length;
var months = {January: 31, February:29, March:31, April:30, May:31, June:30, July:31, August:31, September:30, October:31, November:30, December:31};
function totalProduction(verbose){
total_production = 0;
index = 0;
while(index < numberOfSheds){
    total_production += sheds[index].numberOfCows * sheds[index].averageProd;
    shed_production = sheds[index].numberOfCows * sheds[index].averageProd;
    if (verbose === true){
        console.log("Your production in " + sheds[index].name + " " + shed_production.toString() + " litres per day");
    }
    
    index += 1;
}
if(verbose === true){
    console.log("The total production is " + total_production.toString() + " litres per day" );
}
return total_production;
}
totalProduction(verbose = true);

function incomeOverTime(selling_price, time, verbose){

dailyIncome = totalProduction() * selling_price;
return dailyIncome * time;
}

console.log(" ");
console.log("Your weekly income will be Ksh " + incomeOverTime(45,7));
console.log("Your yearly income will be Ksh " + incomeOverTime(45,365));
        console.log( " ");

for (var key in months){
        monthly_income = incomeOverTime(45, months[key]);
        console.log("Your income for " + key + " is " + monthly_income.toString());
}

