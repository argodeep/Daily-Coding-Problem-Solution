/* Daily Coding Problem: Problem #303 [Easy] */

/* PROBLEM DESCRIPTION

 This problem was asked by Microsoft. 
 Given a clock time in hh:mm format, determine, to the nearest degree, the angle between the hour and the minute hands. 
 Bonus: When, during the course of a day, will the angle be zero?
 
*/

let totalHour = 12;
let totalMinutes= 60;
let anglePerMinutes = 360/totalMinutes;
let anglePerHour = 360/totalHour;
let zeroAngles = [];

let returnAngle = (time) => {
  let hour = time.substr(0,2)
  let minutes = time.substr(3,5)
  
  let hourAngle = hour * anglePerHour;
  let minutesAngle = minutes * anglePerMinutes;
  if (hourAngle - minutesAngle > 180) {
    let angleDifference = 360 - (hourAngle - minutesAngle);
    return Math.abs(angleDifference);
  } else {
    let angleDifference = hourAngle - minutesAngle;
    return Math.abs(angleDifference);
  }
}

let returnHour = (hour) => {
   if (hour < 10) {
      let hrs = '0' + hour;
      return hrs
    } else {
      return hour
   }
}

let returnMinutes = (minutes) => {
    if (minutes == '60') {
      let min = '00';
      return min
    } else if (minutes < 10) {
      return '0' + minutes
    } else {
      return minutes
    }
}

for (var i = 1; i <= totalHour; i++) {
  let hour = i;
  let hourAngle = hour * anglePerHour;
  let minutes = hourAngle/anglePerMinutes;
  let minutesAngle = minutes * anglePerMinutes;
  
  if (hourAngle === minutesAngle) {
    zeroAngles.push(returnHour(hour) + ':' + returnMinutes(minutes))
  }
}

var inputTime = '11:49';
console.log('For a given time ' + '"' + inputTime + '"' + ' angle difference between hour & minute hands is ' + returnAngle(inputTime) + '\xB0');
console.log('During course of the day angle between hour & minute hands will be zero on these clock time' + zeroAngles)
