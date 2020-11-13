import { Curso } from './curso.model';

export interface Turma{
  cdTurma: number;
  nmTurma: string;
  curso: Curso;
  dsPeriodo: string;
  stTurma: boolean;

}
