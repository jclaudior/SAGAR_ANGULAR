import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoCadastrarComponent } from './curso-cadastrar.component';

describe('CursoCadastrarComponent', () => {
  let component: CursoCadastrarComponent;
  let fixture: ComponentFixture<CursoCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
