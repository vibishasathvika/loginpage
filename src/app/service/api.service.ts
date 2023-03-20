import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  login(username:any,pswd:any){
    const body = {
      username,
     pswd
    }
 
    return this.http.post('http://localhost:3000/login',body)
 
   }
   register(username:any,pswd:any){
    const body = {
     username,
     pswd,
     
    }
 
    return this.http.post('http://localhost:3000/register',body)
 
   }

}
