import { TestBed } from '@angular/core/testing';

import { CpfFormatPipeService } from './cpf-format-pipe.service';

describe('CpfFormatPipeService', () => {
  let service: CpfFormatPipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpfFormatPipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
