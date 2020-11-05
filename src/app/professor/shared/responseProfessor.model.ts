import { ResponseAPI } from './../../reponseAPI/responseAPI.model';
import { Professor } from './professor.model';

export interface ResponseProfessor extends ResponseAPI<Professor>{
  status: number;
  mensagem: string;
  retorno: Professor;
}
