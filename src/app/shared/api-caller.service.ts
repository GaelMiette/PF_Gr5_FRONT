import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  BASE_URL = "http://localhost:8080/danavalley"

  constructor(private http:HttpClient) { }

  get(complement:string){

    this.http.get(this.BASE_URL + "/" + complement).subscribe(
      response =>{
        return response;
      },
      error =>{
        alert("oups");
      }
    )
  }

  post(){

  }

  update(){

  }

  delete(){}

}
