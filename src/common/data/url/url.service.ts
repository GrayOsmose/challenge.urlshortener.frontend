import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { UrlModel } from './url.model';

@Injectable()
export class UrlService {
  private defaultPath: string = 'http://localhost:50631/api/urls/';

  constructor (private http: Http) {  }

  public getUrls(): Observable<UrlModel[]> {
    return this.http.get(this.defaultPath)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  public addUrl(url: string): Observable<UrlModel> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });

    return this.http.post(this.defaultPath, { url }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  public deleteUrl(key: string): Observable<string> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers, body: { key } });

    return this.http.delete(this.defaultPath, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {

    let errMsg: string;

    // do something with error, really do something
    console.log(error);


    return Observable.throw(errMsg);
  }
}
