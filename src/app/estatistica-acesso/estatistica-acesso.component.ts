import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import * as moment from 'moment';
import { Dashboard } from '../home/shared/dashboard.model';
import { DashboardService } from '../home/shared/dashboard.service';

declare var $: any;

@Component({
  selector: 'app-estatistica-acesso',
  templateUrl: './estatistica-acesso.component.html',
  styleUrls: ['./estatistica-acesso.component.css']
})

export class EstatisticaAcessoComponent implements OnInit {

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
          this.ctx = this.canvas.getContext('2d');
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

        }
      } else {
        this.mensagemModal = "Data Final de Ser Maior que a Dada Inicial";
        this.titleModal = "Aviso";
        $('#mensagemModal').modal('show');
      }
    }
  }
}
