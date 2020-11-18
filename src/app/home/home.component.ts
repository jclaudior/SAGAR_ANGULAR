import { DashboardService } from './shared/dashboard.service';
import { Component, OnInit } from '@angular/core';
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

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };


  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = false;
  public doughnutChartColors = [
    { backgroundColor: [] }
  ];

  public barChartData = [
    { data: [], label: '' },
  ];


  public barChartLabelsDois = [];
  public barChartTypeDois = 'bar';
  public barChartLegendDois = false;
  public doughnutChartColorsDois = [
    { backgroundColor: [] }
  ];

  public barChartDataDois = [
    { data: [], label: '' },
  ];

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

  isCordenador = true;

  dtInicial: string = moment().subtract(1, 'month').format("YYYY-MM-DD");
  dtFinal: string = moment().format("YYYY-MM-DD");
  dtAtual: Date = new Date();




  constructor(private dashboardService: DashboardService) { }
  ngOnInit() {
    if (localStorage['reload'] != null){
      localStorage.removeItem('reload');
      window.location.reload();
    }
    if (localStorage['professor'] != null){
      this.isCordenador = false;
    }

    if (this.topAcessoAula.labe == null && this.lowAcessoAula.labe == null) {
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


          this.dashboardService.getTopAcessoAula(this.dtInicial, this.dtFinal).subscribe(
            request => {
              this.topAcessoAula = request;
              console.log(this.topAcessoAula);
              this.barChartLabels = this.topAcessoAula.labels;
              this.barChartData =
                [{
                  data: this.topAcessoAula.values,
                  label: this.topAcessoAula.labe,

                }];
              this.doughnutChartColors = [
                { backgroundColor: this.topAcessoAula.colors }
              ];
            }


          );

          this.dashboardService.getLowAcessoAula(this.dtInicial, this.dtFinal).subscribe(
            request => {
              this.lowAcessoAula = request;
              console.log(this.lowAcessoAula);
              this.barChartLabelsDois = this.lowAcessoAula.labels.reverse();
              this.barChartDataDois =
                [{
                  data: this.lowAcessoAula.values.reverse(),
                  label: this.lowAcessoAula.labe,

                }];
              this.doughnutChartColorsDois = [
                { backgroundColor: this.lowAcessoAula.colors }
              ];

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
