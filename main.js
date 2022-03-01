const prompt = require('prompt-sync')();


//variables
let adjatives = ['adorable','angry','annoyed','arrogant','average','awful','beautiful','bloody',
    'blue-eyed','aggressive','blushing','bright','charming','clean','cloudy','combative','courageous',
    'crazy','creepy','cute','dangerous','dark','defiant','delightful','difficult','distinct','dizzy','dull'];

let fishTypes = ['Anchovy','Bass','Butterfish','Carp','Cod','Flounder','Snapper','Marlin','Salmon','Tuna'];

let colors = ['Blue', 'Red', 'Yellow', 'Orange', 'Green'];

let time = 6;
var caughtFish = [];


//start program
console.log("\nYou've gone fishing! Try to maximize the value of your caught fish. You can fish\
for six hours (till 12:00pm) and can catch at most 10 lbs of fish.");


while (time < 12)
{
    time +=1;
    newFish = generateFish();

    console.log('\n================================================================');

    console.log(`\nThe time is ${time}:00am. So far you've caught: ${caughtFish.length} fish, ${calcWeight()} lbs, $${calcCost()}\n`);
    console.log(`\nYou caught a '${newFish.fishType}' weighing ${newFish.weight} lbs and valued at $${newFish.value}\n`);
    
    console.log("\nYour action: [c]atch or [r]elease?");
    choice = (prompt('> '));
    
    
    if (choice == 'c')
    {
        let c = calcWeight();
        if(c + newFish.weight>10){
            console.log('fuck');
        }
        caughtFish.push(newFish);
        console.log('\nYou chose to keep the fish.');
    }

    if (choice == 'r')
    {
        console.log('\nYou chose to release the fish.');
    }

    else{
        console.log("please select either 'c' for catch or 'r' for release");
        //function the propmt
    }
}




//functions
function generateFish()
{
    let adjative = adjatives[Math.floor(Math.random()*adjatives.length)];
    let color = colors[Math.floor(Math.random()*4)];
    let fishType = fishTypes[Math.floor(Math.random()*10)];
    let value = Math.floor(Math.random()*1100)/100;
    let weight = Math.floor(Math.random()*1100)/100;

    return {fishType:`${adjative} ${color} ${fishType}`, value:value, weight:weight};
}

function calcWeight()
{
   

    //start function
    let totalWeight = 0;
    for (let fish of caughtFish)
    {
        totalWeight += fish.weight;
    }
    
    return totalWeight.toFixed(2);
}

function calcCost()
{
    
    //start function
    let totalCost = 0;
    for (let fish of caughtFish)
    {
        totalCost += fish.value;
    }
    
    return totalCost.toFixed(2);
}