let forecast = [];
function printForecast(value){
    for (let i = 0; i <= value.length - 1; i ++){
         console.log(`${value[i]} in ${i+1} days`);     
    }
}
//Test Data
forecast = [12, 5, -5, 0, 4];
printForecast(forecast);

//Array of forecasted maximum temperatures 
//function which takes an array and logs respective string
