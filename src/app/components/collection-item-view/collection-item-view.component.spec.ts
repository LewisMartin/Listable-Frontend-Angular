import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionItemViewComponent } from './collection-item-view.component';

describe('CollectionItemViewComponent', () => {
  let component: CollectionItemViewComponent;
  let fixture: ComponentFixture<CollectionItemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionItemViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
