import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakedataService {

  // Inject HttpClient Object
  constructor(private hc:HttpClient) { }

  // get method
  getColors():Observable<any>{
    return this.hc.get<any>('https://reqres.in/api/unknown');
  }

  getUser():Observable<any>{
    return this.hc.get<any>('https://jsonplaceholder.typicode.com/users');
  }

  // from db.json
  getUsers():Observable<any>{
    return this.hc.get<any>('http://localhost:3000/users');
  }

  // from db.json
  getUsersByID(id):Observable<any>{
    return this.hc.get<any>('http://localhost:3000/users/'+id);
  }
}
