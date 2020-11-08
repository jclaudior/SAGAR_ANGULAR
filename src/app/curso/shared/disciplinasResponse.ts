import { ResponseAPIArray } from 'src/app/reponseAPI/responseAPI.model';
import { Disciplina } from './disciplina.model';



export interface DiscipinasResponse extends ResponseAPIArray<Disciplina>{
  status: number;
  mensagem: string;
  retorno: Array<Disciplina>;
}
