import { Professor } from './professor.model';
import { Turma } from './turma.model';
import { Disciplina } from './disciplina.model';

export interface Aula{
    idAula: number;
    professor: Professor;
    turma: Turma;
    disciplina: Disciplina;
    lkAula: String;
    lkGravacao: String;
    qtAluno: number;
    dtAula: Date;
    hrInicio: String;
    hrTermino: String;
    dsAula: String;
}
