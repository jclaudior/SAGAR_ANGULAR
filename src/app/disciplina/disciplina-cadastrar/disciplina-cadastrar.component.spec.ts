import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaCadastrarComponent } from './disciplina-cadastrar.component';

describe('DisciplinaCadastrarComponent', () => {
  let component: DisciplinaCadastrarComponent;
  let fixture: ComponentFixture<DisciplinaCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisciplinaCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
