import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  canvas: any; ctx: any; canvas2: any; ctx2: any; canvas3: any; ctx3: any;

  ngOnInit() {

    this.canvas = document.getElementById('myChart');
    this.canvas2 = document.getElementById('myChart2');
    this.canvas3 = document.getElementById('myChart3');
    this.ctx = this.canvas.getContext('2d');
    this.ctx2 = this.canvas2.getContext('2d');
    this.ctx3 = this.canvas3.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ["Redes", "Banco de Dados", "Analise de Sistema", "Redes", "Banco de Dados", "Analise de Sistema"],
        datasets: [{
          label: 'Quantida de Alunos Conectados',
          data: [85, 100, 60, 46, 90, 100],
          backgroundColor: ["red", "blue", "orange","green","pink","gray"],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: true
        },
        responsive: true,
        display: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    let myChart2 = new Chart(this.ctx2, {
      type: 'pie',
      data: {
        labels: ["Redes", "Banco de Dados", "Analise de Sistema"],
        datasets: [{
          label: 'Active Angular Vesrions',
          data: [85, 100, 60],
          backgroundColor: ["red", "blue", "orange"],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: true
        },
        responsive: true,
        display: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    let myChart3 = new Chart(this.ctx3, {
      type: 'line',
      data: {
        labels: ["Angular 10", "Angular 9", "Angular 8"],
        datasets: [{
          label: 'Active Angular Vesrions',
          data: [85, 100, 60],
          backgroundColor: ["red", "blue", "orange"],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: true
        },
        responsive: true,
        display: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
