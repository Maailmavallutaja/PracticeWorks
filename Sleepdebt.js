function getSleepHours (day) {
  switch (day){
   	case 'monday' :
 		  return 8;
    case 'tuesday' :
      return 8;
    case 'wednesday' :
      return 10;
    case 'thursday' :
      return 5;
    case 'friday' :
      return 8;
    case 'saturday' :
      return 9;
    case 'sunday' :
      return 4;
    default :'invalid day'
		}
} 
function getActualSleepHours (){
  return getSleepHours('monday') + getSleepHours('tuesday') +
  getSleepHours('thursday') +  getSleepHours('friday') +
  getSleepHours('saturday') +  getSleepHours('wednesday') +
  getSleepHours('sunday');
}

function getIdealSleepHours(){
  const idealHours = 8
  return idealHours * 7
};

function calculateSleepdebt(){
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  const sleepDeficit = actualSleepHours - idealSleepHours;
  
  if (sleepDeficit < 0) { 
    console.log('You did not get enough sleep this week. In total you were missing ' + Math.abs(sleepDeficit) + ' hours')
  }else if(sleepDeficit > 0){
    console.log('You overslept this week. In total you wasted ' + sleepDeficit + ' hours');
  }else{
    console.log ('You got perfect amount of sleep this week.')
  }
  }

calculateSleepdebt();





console.log(getIdealSleepHours());
console.log(getActualSleepHours());