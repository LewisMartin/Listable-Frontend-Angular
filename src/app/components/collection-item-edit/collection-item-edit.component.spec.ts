import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionItemEditComponent } from './collection-item-edit.component';

describe('CollectionItemEditComponent', () => {
  let component: CollectionItemEditComponent;
  let fixture: ComponentFixture<CollectionItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
