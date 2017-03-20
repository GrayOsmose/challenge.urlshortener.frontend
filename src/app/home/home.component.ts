import { Component, OnInit } from '@angular/core';

import { UrlModel } from '../../common/data/url/url.model';
import { UrlService } from '../../common/data/url/url.service';

@Component({
  selector: 'home',
  providers: [
    UrlService
  ],
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public urls: UrlModel[];

  constructor(private urlService: UrlService) {}

  public ngOnInit() {
    this.urls = this.urlService.getUrls();
  }

  public handleUrlUpdate(urlModel: UrlModel) {
    // check incoming data before proceeding
    if (urlModel === null) { return; }

    console.log(urlModel.url);
  }
}
