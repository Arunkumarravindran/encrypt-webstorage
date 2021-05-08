import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptWebstorageComponent } from './encrypt-webstorage.component';

describe('EncryptWebstorageComponent', () => {
  let component: EncryptWebstorageComponent;
  let fixture: ComponentFixture<EncryptWebstorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncryptWebstorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncryptWebstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
