
// Load the Visualization API and the corechart package. //
/* eslint-disable no-unused-vars */
google.charts.load('current', {'packages': ['corechart']});
/* eslint-enable no-unused-vars */

// Set a callback to run when the Google Visualization API is loaded. //
/* eslint-disable no-unused-vars */
google.charts.setOnLoadCallback(drawChart);
/* eslint-enable no-unused-vars */
// Callback that creates and populates a data table, //
// instantiates the pie chart, passes in the data and //
// draws it. //
/* eslint-disable no-unused-vars */
function drawChart() {
  // Create the data table. //
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Gastly', 0.1 ],
    ['Haunter', 0.1],
    ['Gengar', 40.5 ],
  ]);
  /* eslint-enable no-unused-vars */

  // Set chart options //
  /* eslint-disable no-unused-vars */
  const options = {'title': 'Grafico de los pesos del pokemon del tipo Fantasma',
    'width': 300,
    'height': 200};

  /* eslint-enable no-unused-vars */                 
  // Instantiate and draw our chart, passing in some options. //
  /* eslint-disable no-unused-vars */
  const chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
/* eslint-enable no-unused-vars */