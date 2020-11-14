import { Disciplina } from './disciplina.model';
import { ResponseAPIArray } from 'src/app/reponseAPI/responseAPI.model';

export interface DisciplinasResponse extends ResponseAPIArray<Disciplina>{
  status: number;
  mensagem: string;
  retorno: Array<Disciplina>;
}
