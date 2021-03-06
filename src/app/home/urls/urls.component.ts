import { Component, Input, Output, EventEmitter } from '@angular/core';

import { UrlModel } from '../../../common/data/url/url.model';

@Component({
  selector: 'urls',
  providers: [  ],
  styleUrls: [ './urls.component.scss' ],
  templateUrl: './urls.component.html'
})
export class UrlsComponent {
  @Input() public urls: UrlModel[];
  @Output() public urlDelete = new EventEmitter<string>();

  public reroutePath: string = 'api/r/';

  public copy(key) {
    // todo
  }

  public delete(key): void {
    this.urlDelete.emit(key);
  }
}
