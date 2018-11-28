import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionItemDeleteComponent } from './collection-item-delete.component';

describe('CollectionItemDeleteComponent', () => {
  let component: CollectionItemDeleteComponent;
  let fixture: ComponentFixture<CollectionItemDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionItemDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionItemDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
