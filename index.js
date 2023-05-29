/* 
function update() {
    var element = document.getElementById("myprogressBar");   
    var width = 1;
    var identity = setInterval(scene, 10);
    function scene() {
      if (width >= 100) {
        clearInterval(identity);
      } else {
        width++; 
        element.style.width = width + '%'; 
      }
    }
  } */

const progressBar = document.querySelector(".progress");
let progressValue = 0;

setInterval(() => {
  if (progressValue < 100) {
    progressValue += 10;
    progressBar.style.width = `${progressValue}%`;
  }
}, 1000);



var xValues = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["#074073", "#074073","#074073","#074073","#074073"];
var chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(231,233,237)'
} 

new Chart("chart-dia", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Oficios contestados por días"
    },
    scales:{
      y:{
        grid:{
          color: chartColors.grey
        }
      },
      x:{
        grid:{
          color: chartColors.grey
        }
      }
    }
  }
});
new Chart("chart-persona", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Oficios contestados por persona"
    },
    scales:{
      y:{
        grid:{
          color: chartColors.grey
        }
      },
      x:{
        grid:{
          color: chartColors.grey
        }
      }
    }
  }
});