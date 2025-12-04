//Part 1 Growing Pains
let radius =5;
const Pi = 3.1415;
const gardenArea = Pi*radius*radius;

const plantMinSpace = .8;
let numPlant = 20;

let week =3;    //MODIFY THIS VALUE

let multiplier = 2**(week-1)
let totalPlants = multiplier*numPlant*plantMinSpace


let action;


if (totalPlants>(.8*gardenArea)){

    action = 'Pruned';

} else if (totalPlants>(.5*gardenArea)){

    action = 'Monitored';

} else if (totalPlants<(.5*gardenArea)){
    action = 'Planted';
}

output1 = `for week ${week} the plants should be ${action}\n`;


// console.log(output1);
// OUTPUT --------------------------------
// for week 1 the plants should be Planted
// for week 2 the plants should be Planted
// for week 3 the plants should be Pruned






//Part 2 Thinking Bigger
let numStarting = 100;
let noPruneWeeks = 10
let numEnding = (2**(noPruneWeeks-1))*numStarting;
let spaceNeeded = numEnding*plantMinSpace;
let spacediffernce = spaceNeeded-gardenArea;

console.log(`Amount of additional space required: ${spacediffernce}`);

let expandedRadius = (spaceNeeded/Pi)**.5

console.log(`Radius of Expanded Garden: ${expandedRadius}`);









//Part 3 Errors in Judgment