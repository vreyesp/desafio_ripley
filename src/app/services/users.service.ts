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

    getTabla(): Observable<any> {


        let headers = new HttpHeaders({
            'Content-type': 'application/json',
        })

        return this._http.get(this.url, { headers: headers })
            .pipe(map(response => response));
    }
}