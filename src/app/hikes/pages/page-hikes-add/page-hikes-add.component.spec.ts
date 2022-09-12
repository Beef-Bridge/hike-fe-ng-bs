import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHikesAddComponent } from './page-hikes-add.component';

describe('PageHikesAddComponent', () => {
  let component: PageHikesAddComponent;
  let fixture: ComponentFixture<PageHikesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHikesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHikesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
