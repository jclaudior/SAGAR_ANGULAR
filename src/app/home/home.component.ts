import { DashboardService } from './shared/dashboard.service';
import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { Dashboard } from './shared/dashboard.model';
import * as moment from 'moment';

declare var $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  requestSucess = false;
  mensagemModal = '';
  titleModal = '';

  canvas: any; ctx: any; canvas2: any; ctx2: any; canvas3: any; ctx3: any;

  topAcessoAula: Dashboard = {
    colors: [],
    values: [],
    labels: [],
    labe: null
  };
  lowAcessoAula: Dashboard = {
    colors: [],
    values: [],
    labels: [],
    labe: null
  };

  dtInicial: string = moment().subtract(1, 'month').format("YYYY-MM-DD");
  dtFinal: string = moment().format("YYYY-MM-DD");
  dtAtual: Date = new Date();




  constructor(private dashboardService: DashboardService) { }
  ngOnInit() {

    if(this.topAcessoAula.labe == null && this.lowAcessoAula.labe == null){
      this.consultarPeriodo();
    }



  }

  consultarPeriodo(): void {
    let meses = moment(this.dtFinal).diff(moment(this.dtInicial), 'months', true);
    if (this.dtInicial != null && this.dtFinal != null) {
      if (moment(this.dtInicial) <= moment(this.dtFinal)) {
        if (meses >= 6) {
          this.mensagemModal = "Intervalo deve ser de no máximo 6 meses";
          this.titleModal = "Aviso";
          $('#mensagemModal').modal('show');
        } else {
          this.canvas = document.getElementById('myChart');
          this.canvas2 = document.getElementById('myChart2');
          this.ctx = this.canvas.getContext('2d');
          this.ctx2 = this.canvas2.getContext('2d');
          this.dashboardService.getTopAcessoAula(this.dtInicial, this.dtFinal).subscribe(
            request => {
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
                  title: {
                    display: true,
                    text: 'Disciplinas Mais Acessadas'
                  },
                  legend: {
                    display: false
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

          this.dashboardService.getLowAcessoAula(this.dtInicial, this.dtFinal).subscribe(
            request => {
              this.lowAcessoAula = request;
              console.log(this.lowAcessoAula);
              let myChart2 = new Chart(this.ctx2, {
                type: 'bar',
                data: {
                  labels: this.lowAcessoAula.labels.reverse(),
                  datasets: [{
                    label: this.lowAcessoAula.labe,
                    data: this.lowAcessoAula.values.reverse(),
                    backgroundColor: this.lowAcessoAula.colors,
                    borderWidth: 1,
                    barPercentage: 0.6
                  }]
                },
                options: {
                  title: {
                    display: true,
                    text: 'Disciplinas Menos Acessadas'
                  },
                  legend: {
                    display: false
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

        }
      } else {
        this.mensagemModal = "Data Final de Ser Maior que a Dada Inicial";
        this.titleModal = "Aviso";
        $('#mensagemModal').modal('show');
      }
    }
  }

}
