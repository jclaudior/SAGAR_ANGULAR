import { ResponseAPI, ResponseAPIArray } from './../../reponseAPI/responseAPI.model';
import { Turma } from './turma.model';

export interface ResponseTurma extends ResponseAPI<Turma>{
  status: number;
  mensagem: string;
  retorno: Turma;
}

export interface ResponseTurmas extends ResponseAPIArray<Turma>{
  status: number;
  mensagem: string;
  retorno: Array<Turma>;
}
