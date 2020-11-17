import { Turma } from './turma.model';
import { ResponseAPIArray } from 'src/app/reponseAPI/responseAPI.model';

export interface TurmasResponse extends ResponseAPIArray<Turma>{
  status: number;
  mensagem: string;
  retorno: Array<Turma>;
}
