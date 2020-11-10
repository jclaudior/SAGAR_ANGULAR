import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoConsultarComponent } from './curso-consultar.component';

describe('CursoConsultarComponent', () => {
  let component: CursoConsultarComponent;
  let fixture: ComponentFixture<CursoConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoConsultarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
