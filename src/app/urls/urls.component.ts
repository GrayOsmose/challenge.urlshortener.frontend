import { Component, OnInit } from '@angular/core';

import { UrlModel } from '../../common/data/url/url.model';
import { UrlService } from '../../common/data/url/url.service';

@Component({
  selector: 'urls',
  providers: [
  ],
  styleUrls: [ './urls.component.scss' ],
  templateUrl: './urls.component.html'
})
export class UrlsComponent {

  public urls: UrlModel[];

  constructor(private urlsService: UrlService) {
    this.urls = urlsService.getUrls();
  }
}
