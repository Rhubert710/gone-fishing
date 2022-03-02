const prompt = require('prompt-sync')();


// variables //
let adjatives = ['adorable','angry','annoyed','arrogant','average','awful','beautiful','bloody',
    'blue-eyed','aggressive','blushing','bright','charming','clean','cloudy','combative','courageous',
    'crazy','creepy','cute','dangerous','dark','defiant','delightful','difficult','distinct','dizzy','dull'];

let fishTypes = ['Anchovy','Bass','Butterfish','Carp','Cod','Flounder','Snapper','Marlin','Salmon','Tuna'];

let colors = ['Blue', 'Red', 'Yellow', 'Orange', 'Green'];

let time = 5;
let caughtFish = [];
let error = false;
let choice = '';


// start program //
console.log("\nYou've gone fishing! Try to maximize the value of your caught fish. You can fish\
for six hours (till 12:00pm) and can catch at most 10 lbs of fish.");

while (time < 12)
{

    console.log('\n================================================================');
   
    goFishing();
    choice = getInput();
    
    if (choice == 'c')
    {
        caughtFish.push(newFish);
        console.log('\nYou chose to keep the fish.');
    }

    if (choice == 'r')
    {
        console.log('\nYou chose to release the fish.');
    }
}

// end Game //
console.log('\n================================================================');
console.log(`\nGAME OVER\n`)
console.log(`\nThe time is ${time}:00pm. 
You caught: ${caughtFish.length} fish
total weight: ${calcWeight()} lbs 
total bank: $${calcCost()}\n`);




// functions //

function goFishing()
{
    time +=1;
    newFish = generateFish();

    console.log(`\nThe time is ${time}:00am. So far you've caught: ${caughtFish.length} fish, ${calcWeight()} lbs, $${calcCost()}\n`);
    console.log(`\nYou caught a '${newFish.fishType}' weighing ${newFish.weight} lbs and valued at $${newFish.value}\n`);
    
}

function getInput()
{
    if(calcWeight() + newFish.weight >10)
    {
        console.log("\nThis fish would put you over 10 lbs, so you release it.");
        console.log("\nPress any key to continue to continue.");
        choice = (prompt('> '));
        return 'x';
    }

    while(true)
    {
        console.log("\nYour action: [c]atch or [r]elease?");
        choice = (prompt('> '));

        if (choice == 'c' || choice == 'r')
        {
            return choice;
        }
    }
    
}
function generateFish()
{
    let adjative = adjatives[Math.floor(Math.random()*adjatives.length)];
    let color = colors[Math.floor(Math.random()*4)];
    let fishType = fishTypes[Math.floor(Math.random()*10)];
    let value = Math.floor(Math.random()*500)/100;
    let weight = Math.floor(Math.random()*500)/100;

    return {fishType:`${adjative} ${color} ${fishType}`, value:value, weight:weight};
}

function calcWeight()
{
    let totalWeight = 0;
    for (let fish of caughtFish)
    {
        totalWeight += fish.weight;
    }
    return parseFloat(totalWeight.toFixed(2));
}

function calcCost()
{
    let totalCost = 0;
    for (let fish of caughtFish)
    {
        totalCost += fish.value;
    }
    return parseFloat(totalCost.toFixed(2));
}