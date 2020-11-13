import { ResponseAPI } from './../../reponseAPI/responseAPI.model';
import { Turma } from './turma.model';

export interface ResponseTurma extends ResponseAPI<Turma>{
  status: number;
  mensagem: string;
  retorno: Turma;
}
