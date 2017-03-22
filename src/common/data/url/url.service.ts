import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { UrlModel } from './url.model';

@Injectable()
export class UrlService {
  private defaultPath: string = 'http://localhost:50631/api/url/';

  constructor (private http: Http) {  }

  public getUrls(): Observable<UrlModel[]> {

    return this.http.get(this.defaultPath, this.GetRequestOptions())
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  public addUrl(url: string): Observable<UrlModel> {

    return this.http.post(this.defaultPath, { url }, this.GetRequestOptions())
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  public deleteUrl(key: string): Observable<string> {

    return this.http.delete(this.defaultPath + `/${key}`, this.GetRequestOptions())
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {

    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {

    let errMsg: string;

    // do something with error, really do something
    console.log(error);


    return Observable.throw(errMsg);
  }

  private GetRequestOptions(): RequestOptions {

    let headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    return new RequestOptions({ headers, withCredentials: true });
  }
}
