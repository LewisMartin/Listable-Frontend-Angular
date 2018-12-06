import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateCollectionFormModel } from 'src/app/Models/CreateCollectionFormModel';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-collection-create',
  templateUrl: './collection-create.component.html',
  styleUrls: ['./collection-create.component.scss']
})
export class CollectionCreateComponent implements OnInit {

  responseErrorVisible: boolean = false;
  disableSubmit: boolean = false;

  constructor(private _route: ActivatedRoute, private _router: Router, private _collectionService: CollectionService) { }

  ngOnInit() {
  }

  submitCreate(form: NgForm) {
    this.disableSubmit = true;

    var newCollection = new CreateCollectionFormModel();
    newCollection.Name = form.value.collectionName;
    newCollection.ImageEnabled = form.value.imageEnabled;
    newCollection.GridDisplay = form.value.gridDisplay;

    this._collectionService.createCollection(newCollection).subscribe((data: any) => {
      this._router.navigate(['/collections/']);
    }, err => {
      console.log("Error occured: " + err.message);
      this.showResponseError();
      this.disableSubmit = false;
    });
  }

  showResponseError() {
    this.responseErrorVisible = true;
  }

  hideResponseError() {
    this.responseErrorVisible = false;
  }
}
