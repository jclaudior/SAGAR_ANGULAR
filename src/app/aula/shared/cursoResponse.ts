import { Curso } from './curso.model';
import { ResponseAPIArray } from 'src/app/reponseAPI/responseAPI.model';

export interface CursosResponse extends ResponseAPIArray<Curso>{
  status: number;
  mensagem: string;
  retorno: Array<Curso>;
}
