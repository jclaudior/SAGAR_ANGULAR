import { ResponseAPI } from 'src/app/reponseAPI/responseAPI.model';
import { Cordenador } from './cordenador.model';
export interface ResponseCordenador extends ResponseAPI<Cordenador>{
  status: number;
  mensagem: string;
  retorno: Cordenador;
}
