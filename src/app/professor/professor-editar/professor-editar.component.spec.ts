import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorEditarComponent } from './professor-editar.component';

describe('ProfessorEditarComponent', () => {
  let component: ProfessorEditarComponent;
  let fixture: ComponentFixture<ProfessorEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
