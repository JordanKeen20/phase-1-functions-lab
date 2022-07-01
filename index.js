function distanceFromHqInBlocks(startA){
    if (startA > 42)
        return startA - 42;
    else (startA < 42)
        return 42 - startA;
}

function distanceFromHqInFeet(startB){
    if (startB > 42) 
        return (startB - 42) * 264;
    else (startB < 42) 
        return (42 - startB) * 264;
}


function distanceTravelledInFeet(start1,end1){
    if (start1 > end1)
        return (start1-end1)*264
    else (start1 < end1)
        return (end1-start1)*264
}


function calculatesFarePrice(start2,end2){
   let miles = Math.abs(start2-end2);
   let travel = miles * 264;
   if (travel <= 400){
        console.log('gives customers a free sample');
        return 0
   }  
   else if (travel >= 2500)
        return 'cannot travel that far'
    else if (travel >2000 && travel <= 2500){
        return 25 }
    else if (travel>400 && travel <= 2000){
        let cost = (0.02 * (travel - 400));
        return cost
    }
    }