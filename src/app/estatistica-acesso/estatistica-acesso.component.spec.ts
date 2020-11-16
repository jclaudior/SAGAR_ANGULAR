import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatisticaAcessoComponent } from './estatistica-acesso.component';

describe('EstatisticaAcessoComponent', () => {
  let component: EstatisticaAcessoComponent;
  let fixture: ComponentFixture<EstatisticaAcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstatisticaAcessoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatisticaAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
