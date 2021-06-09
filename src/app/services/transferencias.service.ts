import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Transferencias {
    [x: string]: any;

    public url;
    public identity;
    public token;
    constructor(private _http: HttpClient) {
        this.url = "https://jsonplaceholder.typicode.com/users";
    }

    postNuevoDestinatario(data): Observable<any> {


        let headers = new HttpHeaders({
            'Content-type': 'application/json',
        })

        var params;
        params = {
            //faltan params
        }
        return this._http.post(this.url + '/nuevo/destinatario', params, { headers: headers })
            .pipe(map(response => response));
    }


    getHistorial(): Observable<any> {


        let headers = new HttpHeaders({
            'Content-type': 'application/json',
        })

        return this._http.get(this.url + 'get/historial', { headers: headers })
            .pipe(map(response => response));
    }


    getBancos(): Observable<any> {


        let headers = new HttpHeaders({
            'Content-type': 'application/json',
        })

        return this._http.get('https://bast.dev/api/banks.php', { headers: headers })
            .pipe(map(response => response));
    }

    postTransferencia(data): Observable<any> {


        let headers = new HttpHeaders({
            'Content-type': 'application/json',
        })

        var params;
        params = {
            //faltan params
        }
        return this._http.post(this.url + '/nueva/transferencia', params, { headers: headers })
            .pipe(map(response => response));
    }


}