import { ResponseAPI } from 'src/app/reponseAPI/responseAPI.model';
import { Curso } from './curso.model';

export interface ResponseCurso extends ResponseAPI<Curso>{
  status: number;
  mensagem: string;
  retorno: Curso;
}
