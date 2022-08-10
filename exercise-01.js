var physics = parseInt(prompt("Enter Physics score:"));
var chemistry = parseInt(prompt("Enter Chemistry score:"));
var biology = parseInt(prompt("Enter Biology score:"));

var averageScore = (physics+chemistry+biology)/3;
document.write("Average score is:" + averageScore);