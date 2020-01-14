import {Injectable} from '@angular/core';
import {StateList} from './statelist';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class StateListService
{
    constructor(private _http:Http){}
    getStateList():Observable<any[]>{
        return this._http.get("http://rojaselvamani.in/api/statelist.php")
        .pipe(map((response: any) => <any[]>response.json()));
    }
}