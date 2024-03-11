import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddfilmComponent } from './admin-addfilm.component';

describe('AdminAddfilmComponent', () => {
  let component: AdminAddfilmComponent;
  let fixture: ComponentFixture<AdminAddfilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAddfilmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAddfilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
