import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recruiter } from '../shared/recruiter';
import { Candidate } from '../shared/candidate';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  BASE_URL = "";
  candidate: any = {mail: "", mdp: "", isRecruiter:false}
  recruiter: any = {mail: "", mdp: "", isRecruiter:true}

  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.BASE_URL = sessionStorage.getItem("BASE_URL");
  }

  login_candidate(user){
    this.http.get<Candidate>(this.BASE_URL + "/candidatsmail/" + user.mail).subscribe(
      response =>{
        if(response != null && response.mdp == user.mdp){
          response.isRecruiter = false;
          let toStore = JSON.stringify(response);
          sessionStorage.setItem("user", toStore);
          this.router.navigate(["/home"]);
        }
      },
      error =>{
        alert("bouh");
      }
    )
  }

  login_recruiter(user){
    
    this.http.get<Recruiter>(this.BASE_URL + "/recruteursmail/" + user.mail).subscribe(

      response =>{
        
        if(response != null && response.mdp == user.mdp){
          response.isRecruiter = true;
          let toStore = JSON.stringify(response);
          sessionStorage.setItem("user", toStore);
          window.location.reload();
          alert("connecté");
        }

      },
      error =>{
        alert("erreur");
      }
      
    )
  }

  login(isRecruiter: boolean){
    console.log(sessionStorage);
    isRecruiter ? this.login_recruiter(this.recruiter) : this.login_candidate(this.candidate);
    console.log(sessionStorage);
    //window.location.reload();
  }

}
