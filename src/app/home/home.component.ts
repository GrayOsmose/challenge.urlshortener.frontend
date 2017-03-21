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
    this.urlService.getUrls()
                   .subscribe((urls) => this.urls = urls,
                              (error) => { /* do something about error */});
  }

  public handleUrlUpdate(urlModel: UrlModel) {
    // check incoming data before proceeding
    if (urlModel === null || !urlModel.isValid()) { return; }

    this.addUrl(urlModel.url);
  }

  private addUrl(url): void {
    this.urlService.addUrl(url)
                   .subscribe((urlModel) => this.urls.push(urlModel),
                              (error) => { /* do something about error */});
  }

  private deleteUrl(urlModel): void {
    this.urlService.deleteUrl(urlModel.key)
                   .subscribe((key) => this.urls = this.urls.filter((model) => model.key === key),
                              (error) => { /* do something about error */});
  }
}
