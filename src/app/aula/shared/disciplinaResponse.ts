import { Disciplina } from './disciplina.model';
import { ResponseAPIArray } from 'src/app/reponseAPI/responseAPI.model';

export interface DisciplinaResponse extends ResponseAPIArray<Disciplina>{
  status: number;
  mensagem: string;
  retorno: Array<Disciplina>;
}
