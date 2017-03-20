import { Component, Output, EventEmitter } from '@angular/core';

import { UrlModel } from '../../../common/data/url/url.model';

@Component({
  selector: 'url',
  providers: [  ],
  styleUrls: [ './url.component.scss' ],
  templateUrl: './url.component.html'
})
export class UrlComponent {
  @Output() public urlUpdated = new EventEmitter<UrlModel>();

  public urlModel: UrlModel = new UrlModel();
  public dumbCounter: number = 0;

  public submitUrl(): void {

    // check validity
    if (!this.urlModel.isValid()) {
      this.dumbCounter++;
      return;
    }

    // who is a good boy?
    this.dumbCounter = 0;

    // emit event upwards
    this.urlUpdated.emit(this.urlModel);

    // clear data
    this.urlModel = new UrlModel();
  }
}
