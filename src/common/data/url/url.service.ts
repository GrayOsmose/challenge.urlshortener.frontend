import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { UrlModel } from './url.model';

@Injectable()
export class UrlService {
  private static defaultPath: string = '/api/urls/';

  constructor (private http: Http) {}

  public getUrls(): UrlModel[] {
    return null;
  }
}
