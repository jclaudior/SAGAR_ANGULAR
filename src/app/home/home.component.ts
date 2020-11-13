import { DashboardService } from './shared/dashboard.service';
import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { Dashboard } from './shared/dashboard.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  canvas: any; ctx: any; canvas2: any; ctx2: any; canvas3: any; ctx3: any;
  topAcessoAula: Dashboard;
  constructor(private dashboardService: DashboardService){}
  ngOnInit() {
    this.canvas = document.getElementById('myChart');
    this.canvas2 = document.getElementById('myChart2');
    this.canvas3 = document.getElementById('myChart3');
    this.ctx = this.canvas.getContext('2d');
    this.ctx2 = this.canvas2.getContext('2d');
    this.ctx3 = this.canvas3.getContext('2d');
    this.dashboardService.getTopAcessoAula().subscribe(
      request =>{
         this.topAcessoAula = request;
         console.log(this.topAcessoAula);

    let myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: this.topAcessoAula.labels,
        datasets: [{
          label: this.topAcessoAula.labe,
          data: this.topAcessoAula.values,
          backgroundColor: this.topAcessoAula.colors,
          borderWidth: 2,
          barPercentage: 0.6
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

    );


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
