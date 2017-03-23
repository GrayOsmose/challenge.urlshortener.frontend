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

  public handleUrlDelete(key: string): void {

    if (!key) { return; }

    this.deleteUrl(key);
  }

  private addUrl(url): void {
    this.urlService.addUrl(url)
                   .subscribe((urlModel) => this.urls.push(urlModel),
                              (error) => { /* do something about error */});
  }

  private deleteUrl(key: string): void {
    this.urlService.deleteUrl(key)
                   .subscribe((keySubscription) => this.urls = this.urls.filter((value) => value.key === keySubscription),
                              (error) => { /* do something about error */});
  }
}
