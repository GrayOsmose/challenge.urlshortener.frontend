import { Component, Input } from '@angular/core';

import { UrlModel } from '../../../common/data/url/url.model';

@Component({
  selector: 'urls',
  providers: [  ],
  styleUrls: [ './urls.component.scss' ],
  templateUrl: './urls.component.html'
})
export class UrlsComponent {
  @Input() public urls: UrlModel[];
}
