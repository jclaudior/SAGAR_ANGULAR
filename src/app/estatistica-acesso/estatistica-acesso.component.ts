import { Disciplina } from './../disciplina/shared/disciplina.model';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DisciplinaService } from '../curso/shared/disciplina.service';
import { DiscipinasResponse } from '../curso/shared/disciplinasResponse';
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

  acessoAulaDisciplina: Dashboard = {
    colors: [],
    values: [],
    labels: [],
    labe: null
  };

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = false;
  public doughnutChartColors = [
    {backgroundColor:[]}
  ];

  public barChartData = [
    {data: [], label: ''},
  ];



  dtInicial: string = moment().subtract(1, 'month').format("YYYY-MM-DD");
  dtFinal: string = moment().format("YYYY-MM-DD");
  disciplina: Disciplina;
  dtAtual: Date = new Date();

  disciplinaResponse: DiscipinasResponse = {
    mensagem: null,
    status: null,
    retorno: []
  };


  constructor(
    private dashboardService: DashboardService,
    private disciplinaService: DisciplinaService) { }

  ngOnInit() {
    this.disciplinaService.getListarDisciplinas().subscribe(
      response => {
        this.disciplinaResponse = response;
      }
    );

    if(this.acessoAulaDisciplina.labe == null && this.acessoAulaDisciplina.labe == null && this.disciplina != null){
      this.consultarPeriodo();
    }



  }

  consultarPeriodo(): void {
    let meses = moment(this.dtFinal).diff(moment(this.dtInicial), 'months', true);
    if (this.dtInicial != null && this.dtFinal != null && this.disciplina != null) {
      if (moment(this.dtInicial) <= moment(this.dtFinal)) {
        if (meses >= 6) {
          this.mensagemModal = "Intervalo deve ser de no máximo 6 meses";
          this.titleModal = "Aviso";
          $('#mensagemModal').modal('show');
        } else {

          this.dashboardService.getAcessoAulaDiciplina(this.dtInicial, this.dtFinal, this.disciplina).subscribe(
            request => {
              this.acessoAulaDisciplina = request;
              console.log(this.acessoAulaDisciplina);

              this.barChartLabels = this.acessoAulaDisciplina.labels;
              this.barChartData =
              [{
                data: this.acessoAulaDisciplina.values,
                label: this.acessoAulaDisciplina.labe,

              }];
              this.doughnutChartColors = [
                {backgroundColor:this.acessoAulaDisciplina.colors}
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

  setNewCurso(disciplima: Disciplina): void {
    this.disciplina = disciplima;
    console.log(this.disciplina);
  }

}
