import { TestBed } from '@angular/core/testing';

import { TurmaService } from './turma.service';

describe('TurmaService', () => {
  let service: TurmaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurmaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
