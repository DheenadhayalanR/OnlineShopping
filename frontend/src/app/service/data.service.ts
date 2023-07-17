import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  Url='http://127.0.0.1:8000/'

  constructor(private http: HttpClient) { }

  getData():Observable<any[]> {
    return this.http.get<any[]>(this.Url + 'read/');
    }

  // saveData(val:any){
  //     return this.http.post(this.Url + 'save/' ,val)
  //   }

  public saveUser(user: any): Observable<any> {
      
      return this.http.post<any>(this.Url + 'save/',user);
    }
}
