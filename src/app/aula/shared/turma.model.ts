import { Curso } from 'src/app/curso/shared/curso.model';

export interface Turma{
  cdTurma: number;
  nmTurma: string;
  curso: Curso;
  dsPeriodo: string;
  stTurma: boolean;

}
