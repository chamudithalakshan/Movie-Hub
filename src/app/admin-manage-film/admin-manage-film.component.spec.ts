import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageFilmComponent } from './admin-manage-film.component';

describe('AdminManageFilmComponent', () => {
  let component: AdminManageFilmComponent;
  let fixture: ComponentFixture<AdminManageFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminManageFilmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminManageFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
