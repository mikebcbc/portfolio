// Chart

var ctx = $("#skillsChart");
var Chart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: ["ReactJS", "NodeJS", "MongoDB", "Vanilla JavaScript", "SCSS", "ES6", "HTML"],
      datasets: [{
          label: 'Skill Level',
          data: [90, 85, 75, 90, 95, 90, 100],
          backgroundColor: [
              'rgba(54, 162, 235, 0.6)',
							'rgba(75, 192, 192, 0.6)',
              'rgba(255, 206, 86, 0.6)',
							'rgba(255, 99, 132, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(122, 122, 0, 0.6)',
              'rgba(155, 200, 124, 0.6)'
          ]
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true,
                  callback: function(value) {
                  	return value + "%";
                  }
              },
            	scaleLabel: {
            		display: true,
            		labelString: "Percentage"
            	}
          }]
      }
  }
});