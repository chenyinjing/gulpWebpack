import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
var util = require("util");

@Injectable()
export class HttpService {

  constructor(private http: Http) {}


  get(url): Observable<any> {
    return this.http.get(url)
      .map(function (res) {return res.json() || [];})
      .catch(function (error) {return Observable.throw(error);});
  }
  put(url, body): Observable<any> {
    var options = new RequestOptions({
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return this.http.put(url, body, options)
      .map(function (res) {
        try {
          return res.json() || [];
        }
        catch (e) {
          return res;
        }
      }).catch(function (error) {
        return Observable.throw(error);
      });
  }
  // post(url: string, body: Object): Observable<any> {}
  // delete(url: string, body: Object): Observable<any> {}
  // request(api: string, body?: Object): Observable<any> {}
}
