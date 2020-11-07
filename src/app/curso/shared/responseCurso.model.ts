import { ResponseAPI } from '../../reponseAPI/responseAPI.model';
import { Curso } from './curso.model';

export interface ResponseCurso extends ResponseAPI<Curso>{
  status: number;
  mensagem: string;
  retorno: Curso;
}
