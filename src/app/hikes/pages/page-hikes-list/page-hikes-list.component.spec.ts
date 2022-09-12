import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHikesListComponent } from './page-hikes-list.component';

describe('PageHikesListComponent', () => {
  let component: PageHikesListComponent;
  let fixture: ComponentFixture<PageHikesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHikesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHikesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
