import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfFormatPipeComponent } from './cpf-format-pipe.component';

describe('CpfFormatPipeComponent', () => {
  let component: CpfFormatPipeComponent;
  let fixture: ComponentFixture<CpfFormatPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpfFormatPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpfFormatPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
