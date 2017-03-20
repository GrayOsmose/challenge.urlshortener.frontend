import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { AuthService } from '../auth/auth.service';

import { UrlModel } from './url.model';

@Injectable()
export class UrlService {
  private static defaultPath: string = '/api/urls/';

  private urls: UrlModel[] = [];

  constructor (private http: Http, private authService: AuthService) {

  }

  public getUrls(): UrlModel[] {
    this.http.get(UrlService.defaultPath);

    return this.urls;
  }
}
