import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  async login_candidate(user){

    let registered = await this.http.get<Candidate>(this.BASE_URL + "/candidatsmail/" + user.mail).toPromise()[0]
    
    if(registered == undefined){
      alert("cet utilisateur n'existe pas");
      return ;
    }
        
    if(registered.mdp != user.mdp){
      alert("mauvais mot de passe");
      return ;
    }
    
    registered.isRecruiter = false;
    let toStore = JSON.stringify(registered);
    sessionStorage.setItem("user", toStore);

  }

  async login_recruiter(user){

    let registered = await this.http.get<Recruiter>(this.BASE_URL + "/recruteursmail/" + user.mail).toPromise()
    console.log(registered)
    if(registered == undefined){
      alert("cet utilisateur n'existe pas");
      return ;
    }
        
    if(registered.mdp != user.mdp){
      alert("mauvais mot de passe");
      return ;
    }
    
    registered.isRecruiter = true;
    let toStore = JSON.stringify(registered);
    sessionStorage.setItem("user", toStore);
  }

  login(isRecruiter: boolean){
    isRecruiter ? this.login_recruiter(this.recruiter) : this.login_candidate(this.candidate);
    window.location.reload();
  }

}