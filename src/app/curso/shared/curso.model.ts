import { Cordenador } from './cordenador.model';
import { Disciplina } from './disciplina.model';

export interface Curso{
  cdCurso: number;
  nmCurso: string;
  qtHora: number;
  cordenadorEntity: Cordenador;
  disciplinas: Array<Disciplina>;
  stCurso: boolean;
}
