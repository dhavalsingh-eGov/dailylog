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
    {
      date: "20/05/22",
      weight: 83.9,
      cals: 1800,
      cigs: 3,
    },
    {
      date: "21/05/22",
      weight: 83.4,
      cals: 1600,
      cigs: 2.5,
    },
    {
      date: "22/05/22",
      weight: 83.5,
      cals: 1900,
      cigs: 3,
    },
    {
      date: "23/05/22",
      weight: 83.3,
      cals: 2000,
      cigs: 4,
    },
    {
      date: "24/05/22",
      weight: 83.1,
      cals: 2100,
      cigs: 3.5,
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
      fontColor: "#fffcf2",
    },
    legend: {
      display: true,
      labels: {
        fontColor: "#fffcf2",
      },
    },
    scales: {
      yAxes: [
        {
          id: "calories",
          ticks: {
            beginAtZero: false,
            suggestedMin: 1200,
            fontColor: "#fffcf2",
          },
          scaleLabel: {
            display: true,
            labelString: "Calories(Kcal)",
            fontColor: "#fffcf2",
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
            fontColor: "white",
          },
          scaleLabel: {
            display: true,
            labelString: "Weight(Kg)",
            fontColor: "#fffcf2",
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
