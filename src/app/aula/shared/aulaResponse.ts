import { ResponseAPIArray } from './../../reponseAPI/responseAPI.model';
import { Aula } from './aula.model';
import { ResponseAPI } from '../../reponseAPI/responseAPI.model';

export interface ResponseAula extends ResponseAPI<Aula>{
  status: number;
  mensagem: string;
  retorno: Aula;
}

export interface ResponseAulas extends ResponseAPIArray<Aula>{
  status: number;
  mensagem: string;
  retorno: Array<Aula>;
}
