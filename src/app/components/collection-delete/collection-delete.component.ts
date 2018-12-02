import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from 'src/app/services/collection.service';
import { CollectionsListItem } from 'src/app/Models/Collection';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-collection-delete',
  templateUrl: './collection-delete.component.html',
  styleUrls: ['./collection-delete.component.scss']
})
export class CollectionDeleteComponent implements OnInit {

  collectionList: Array<CollectionsListItem>;

  responseErrorVisible: boolean = false;
  spinnerVisible: boolean = true;
  disableSubmit: boolean = false;

  constructor(private _route: ActivatedRoute, private _router: Router, private _collectionService: CollectionService) { }

  ngOnInit() {
    this._collectionService.getCollectionsForAuthenticatedUser().subscribe((data: Array<CollectionsListItem>) => { 
      this.collectionList = data;
      this.spinnerVisible = false;
    });
  }

  showResponseError() {
    this.responseErrorVisible = true;
  }

  hideResponseError() {
    this.responseErrorVisible = false;
  }

  submitDelete(form: NgForm) {
    this.disableSubmit = true;
    this.hideResponseError();

    this._collectionService.deleteCollection(form.value.selectedCollection).subscribe(result => {
      this._router.navigate(['/collections/']);
    }, err => {
      console.log("Error occured: " + err.message);
      this.showResponseError();
      this.disableSubmit = false;
    });
  }
}
