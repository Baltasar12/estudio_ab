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
var barColors = ["red", "green","blue","orange","brown"];

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
    }
  }
});