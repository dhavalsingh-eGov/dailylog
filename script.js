var Data = {
  data: [
    {
      date: "15/05/22",
      weight: 84,
      cals: 2674,
      cigs: 4,
    },
    {
      date: "16/05/22",
      weight: 83.4,
      cals: 1900,
      cigs: 3,
    },
    {
      date: "17/05/22",
      weight: 83.9,
      cals: 2100,
      cigs: 4.5,
    },
    {
      date: "18/05/22",
      weight: 83.2,
      cals: 1900,
      cigs: 2,
    },
    {
      date: "19/05/22",
      weight: 84.3,
      cals: 2400,
      cigs: 5,
    },
  ],
};

var labels = Data.data.map(function (e) {
  return e.date;
});

var weights = Data.data.map(function (e) {
  return e.weight;
});

var cal = Data.data.map(function (e) {
  return e.cals;
});

var cig = Data.data.map(function (e) {
  return e.cigs;
});
new Chart(document.getElementById("mixed-chart"), {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Calories",
        type: "line",
        borderColor: "#8e5ea2",
        data: cal,
        fill: false,
        yAxisID: "calories",
      },
      {
        label: "Weight",
        type: "line",
        borderColor: "#3e95cd",
        data: weights,
        fill: false,
        yAxisID: "weight",
      },
      {
        label: "Ciggrates",
        type: "bar",
        backgroundColor: "rgba(0,0,0,0.2)",
        data: cig,
        yAxisID: "cigs",
        barThickness: 50,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Fitness Log",
    },
    legend: {
      display: true,
      labels: {
        fontColor: "black",
      },
    },
    scales: {
      yAxes: [
        {
          id: "calories",
          ticks: {
            beginAtZero: false,
            suggestedMin: 1200,
            fontColor: "black",
          },
          scaleLabel: {
            display: true,
            labelString: "Calories(Kcal)",
            fontColor: "black",
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            zeroLineColor: "black",
          },
        },
        {
          id: "weight",
          position: "right",
          ticks: {
            beginAtZero: false,
            suggestedMin: 60,
            fontColor: "black",
          },
          scaleLabel: {
            display: true,
            labelString: "Weight(Kg)",
            fontColor: "black",
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            zeroLineColor: "black",
          },
        },
        {
          id: "cigs",
          ticks: {
            beginAtZero: true,
            display: false,
          },
          scaleLabel: {
            display: false,
            labelString: "Ciggs/Day",
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            zeroLineColor: "black",
            display: false,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontColor: "white",
          },
          gridLines: {
            display: false,
            zeroLineColor: "black",
            fontColor: "black",
          },
        },
      ],
    },
  },
});
