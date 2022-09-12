import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHikesEditComponent } from './page-hikes-edit.component';

describe('PageHikesEditComponent', () => {
  let component: PageHikesEditComponent;
  let fixture: ComponentFixture<PageHikesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHikesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHikesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
