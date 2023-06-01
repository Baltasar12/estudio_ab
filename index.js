/* const progressBar = document.querySelector(".progress");
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
      label: "Oficios contestados por días",
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
        ticks:{
          color:'white'
        },
        grid:{
          color: chartColors.grey
        }
      },
      x:{
        ticks:{
          color:'white'
        },
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
      label: "Oficios contestados por persona",
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
        ticks:{
          color:'white'
        },
        grid:{
          color: chartColors.grey
        }
      },
      x:{
        ticks:{
          color:'white'
        },
        grid:{
          color: chartColors.grey
          
        }
      }
    }
  }
}); */


// Datos de ejemplo para el primer gráfico
const datos1 = [
  { fecha: '2023-01-01', valor: 10 },
  { fecha: '2023-02-01', valor: 15 },
  { fecha: '2023-03-01', valor: 8 },
  { fecha: '2023-04-01', valor: 12 },
  { fecha: '2023-05-01', valor: 6 }
];

// Datos de ejemplo para el segundo gráfico
const datos2 = [
  { fecha: '2023-01-01', valor: 5 },
  { fecha: '2023-02-01', valor: 3 },
  { fecha: '2023-03-01', valor: 12 },
  { fecha: '2023-04-01', valor: 8 },
  { fecha: '2023-05-01', valor: 10 }
];

// Configuración de los gráficos
const margin = { top: 20, right: 20, bottom: 40, left: 50 };
const width = 600 - margin.left - margin.right;
const height = 300 - margin.top - margin.bottom;

// Crear los elementos SVG para los gráficos
const svg1 = d3.select("#chart1")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

const svg2 = d3.select("#chart2")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Función para filtrar los datos según el rango de fechas seleccionado
function filterData() {
  const startDate = document.getElementById('start-date').value;
  const endDate = document.getElementById('end-date').value;

  const filteredData1 = datos1.filter(d => d.fecha >= startDate && d.fecha <= endDate);
  const filteredData2 = datos2.filter(d => d.fecha >= startDate && d.fecha <= endDate);

  updateChart(svg1, filteredData1);
  updateChart(svg2, filteredData2);
}

// Función para actualizar el gráfico con los datos filtrados
function updateChart(svg, data) {
  // Escala X (Fechas)
  const xScale = d3.scaleBand()
    .range([0, width])
    .padding(0.1);

  // Escala Y (Valores)
  const yScale = d3.scaleLinear()
    .range([height, 0]);

  // Ejes X e Y
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  // Actualizar dominios de escalas
  xScale.domain(data.map(d => d.fecha));
  yScale.domain([0, d3.max(data, d => d.valor)]);

  // Eliminar el gráfico anterior
  svg.selectAll(".bar").remove();
  svg.selectAll(".x.axis").remove();
  svg.selectAll(".y.axis").remove();

  // Agregar ejes al SVG
  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0, ${height})`)
    .call(xAxis);

  svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);

  // Agregar las barras al gráfico
  const bars = svg.selectAll(".bar")
    .data(data, d => d.fecha);

  // Actualizar barras existentes
  bars.attr("x", d => xScale(d.fecha))
    .attr("width", xScale.bandwidth())
    .attr("y", d => yScale(d.valor))
    .attr("height", d => height - yScale(d.valor));

  // Agregar nuevas barras
  bars.enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => xScale(d.fecha))
    .attr("width", xScale.bandwidth())
    .attr("y", d => yScale(d.valor))
    .attr("height", d => height - yScale(d.valor));
}

// Llamar a la función para mostrar los gráficos iniciales
updateChart(svg1, datos1);
updateChart(svg2, datos2);
