import { Professor } from './professor.model';
import { Turma } from './turma.model';
import { Disciplina } from './disciplina.model';

export interface Aula{
    idAula: number;
    professor: Professor;
    turma: Turma;
    disciplina: Disciplina;
    lkAula: string;
    lkGravacao: string;
    qtAluno: number;
    dtAula: string;
    hrInicio: string;
    hrTermino: string;
    dsAula: string;
}
