
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequestHandler } from './http-client';
import { environment } from '../../environments/environment';



@Injectable({
    providedIn: 'root'
})
export class customerService {
    baseApiUrl: string = environment.baseAPiurl
    constructor(private http: HttpRequestHandler) { }
    
      addcustomer(data: any): Observable<any> {
        return this.http.post<any>(this.baseApiUrl + 'api/addcustomer', data);
      }
    
      getcustomerdetails(): Observable<any> {
        return this.http.get<any>(this.baseApiUrl + 'api/getcustomerbyid/');
      }
    
      

        

}
