import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    [x: string]: any;

    public url;
    public identity;
    public token;
    constructor(private _http: HttpClient) {
        this.url = "https://jsonplaceholder.typicode.com/users";
    }

    login(rut, password, getToken = null) {
        var params;
        if (getToken != null) {
          params = {
            rut: rut,
            password: password,
            getToken: getToken
          }
        } else {
          params = {
            rut: rut,
            password: password
          }
        }
        let headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });
    
        return this._http.post(this.url + 'login', params, { headers: headers })
          .pipe(map(res => res));
      }
    
}