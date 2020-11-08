

import { Component, OnInit } from '@angular/core';


import { DualListComponent } from 'angular-dual-listbox';
import { Disciplina } from '../shared/disciplina.model';
import { DisciplinaService } from '../shared/disciplina.service';
import { DiscipinasResponse } from '../shared/disciplinasResponse';

@Component({
  selector: 'app-curso-cadastrar',
  templateUrl: './curso-cadastrar.component.html',
  styleUrls: ['./curso-cadastrar.component.css']
})
export class CursoCadastrarComponent implements OnInit {


  tab = 1;
	keepSorted = true;
	idDisciplina: string;
	display: any;
	filter = false;
	source: Array<any>;
	confirmed: Array<any>;
	userAdd = '';
	disabled = false;

	sourceLeft = true;
	format: any = DualListComponent.DEFAULT_FORMAT;


	private sourceStations: Array<Disciplina>;


	private confirmedStations: Array<any>;



  disciplinasArray: Array<Disciplina>;

  disciplinasResponse: DiscipinasResponse;


  constructor(private disciplinaService: DisciplinaService ){

  }

	ngOnInit() {
    this.disciplinaService.getListarDisciplinas().subscribe(
      response => {
        this.disciplinasResponse = response;
        this.disciplinasArray = this.disciplinasResponse.retorno;
        console.log(this.disciplinasArray );
        this.doReset();
      }
    );

	}

	private stationLabel(item: Disciplina) {
		return `Nome: ${item.nmDisciplina} | Carga Horaria: ${item.qtHora}`;
	}

	private useStations() {
		this.idDisciplina = 'idDisciplina';
		this.display = this.stationLabel;
		this.keepSorted = true;
		this.source = this.sourceStations;
		this.confirmed = this.confirmedStations;
	}

	swapSource() {
			this.useStations();
	}

	doReset() {
    this.sourceStations = JSON.parse(JSON.stringify(this.disciplinasArray ));
    console.log(this.sourceStations)
		this.confirmedStations = new Array<any>();


		// Preconfirm some items.
		//this.confirmedStations.push( this.stations[31] );

		this.useStations();

	}

	doDelete() {
		if (this.source.length > 0) {
			this.source.splice(0, 1);
		}
	}

	doCreate() {
		if (typeof this.source[0] === 'object') {
			const o = {};
			o[this.idDisciplina] = this.source.length + 1;
			o[this.display] = this.userAdd;
			this.source.push( o );
		} else {
			this.source.push(this.userAdd);
		}
		this.userAdd = '';
	}

	doAdd() {
		for (let i = 0, len = this.source.length; i < len; i += 1) {
			const o = this.source[i];
			const found = this.confirmed.find( (e: any) => e === o );
			if (!found) {
				this.confirmed.push(o);
				break;
			}
		}
	}

	doRemove() {
		if (this.confirmed.length > 0) {
			this.confirmed.splice(0, 1);
		}
	}

	doFilter() {
		this.filter = !this.filter;
	}

	filterBtn() {
		return (this.filter ? 'Hide Filter' : 'Show Filter');
	}

	doDisable() {
		this.disabled = !this.disabled;
	}

	disableBtn() {
		return (this.disabled ? 'Enable' : 'Disabled');
	}

	swapDirection() {
		this.sourceLeft = !this.sourceLeft;
		this.format.direction = this.sourceLeft ? DualListComponent.LTR : DualListComponent.RTL;
	}


}
