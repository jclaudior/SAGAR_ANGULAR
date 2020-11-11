import { Curso } from './curso.model';

export interface Turma{
    cdCodigo: number,
    nmTurma: string,
    curso: Curso,
    dsPeriodo: string,
    stTurma: boolean,
}
