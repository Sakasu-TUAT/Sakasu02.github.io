"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auto_1 = require("../node_modules/chart.js/auto");
// データの定義
var data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: 'My First Dataset',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }
    ]
};
var options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};
// グラフの描画
var ctx = document.getElementById('myChart');
var myChart = new auto_1.Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});
