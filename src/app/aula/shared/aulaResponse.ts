import { Aula } from './aula.model';
import { ResponseAPI } from '../../reponseAPI/responseAPI.model';

export interface ResponseAula extends ResponseAPI<Aula>{
  status: number;
  mensagem: string;
  retorno: Aula;
}
