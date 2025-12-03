//Part 1 Growing Pains
let radius =5;
const Pi = 3.1415;
const gardenArea = Pi*radius*radius;

const plantMinSpace = .8;
let numPlant = 20;

let week =1;

let plant = 2**(week-1)



// let plantsPerWeek = beginingPlans * 2 ** week


let WeeksNumber1=1;
let WeeksNumber2=WeeksNumber1*2;
let WeeksNumber3=WeeksNumber2*2;


let plantArea = numPlant*plantMinSpace;

let plantAreaTest1 = WeeksNumber1*plantArea;
let plantAreaTest2= WeeksNumber2*plantArea;
let plantAreaTest3 = WeeksNumber3*plantArea; 

let action;

//Week one Test
if (plantAreaTest1>(.8*gardenArea)){

    action = 'Pruned'

} else if (plantAreaTest1>(.5*gardenArea)){

    action = 'Monitored'

} else if (plantAreaTest1<(.5*gardenArea)){
    action = 'Planted'
}

output1 = `for week ${WeeksNumber1} the plants should be ${action}\n`;

//Week Two Test
if (plantAreaTest2>(.8*gardenArea)){

    action = 'Pruned'

} else if (plantAreaTest2>(.5*gardenArea)){

    action = 'Monitored'

} else if (plantAreaTest2<(.5*gardenArea)){
    action = 'Planted'
}

output2 = `for week ${WeeksNumber2} the plants should be ${action}\n`;

//Week 3 test
if (plantAreaTest3>(.8*gardenArea)){

    action = 'Pruned'

} else if (plantAreaTest3>(.5*gardenArea)){

    action = 'Monitored'

} else if (plantAreaTest3<(.5*gardenArea)){
    action = 'Planted'
}


output3 = `for WeeksNumber3 the plants should be ${action}`;




console.log(output1,output2,output3);








//Part 2 Thinking Bigger















//Part 3 Errors in Judgment