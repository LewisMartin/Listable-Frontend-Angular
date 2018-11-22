import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionItemCreateComponent } from './collection-item-create.component';

describe('CollectionItemCreateComponent', () => {
  let component: CollectionItemCreateComponent;
  let fixture: ComponentFixture<CollectionItemCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionItemCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionItemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
