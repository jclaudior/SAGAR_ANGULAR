import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorConsultarComponent } from './professor-consultar.component';

describe('ProfessorConsultarComponent', () => {
  let component: ProfessorConsultarComponent;
  let fixture: ComponentFixture<ProfessorConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorConsultarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
