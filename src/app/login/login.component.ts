import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  candidate: any = {mail: "", pwd: "", isRecruiter:false}
  recruiter: any = {mail: "", pwd: "", isRecruiter:true}

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(isRecruiter: boolean){

    let user = this.candidate;

    if(isRecruiter){
      user = this.recruiter;
    }

    // vérification bdd
    let isRegistered: boolean = true;
    
    if(isRegistered){
      delete user.pwd;
      let toStore = JSON.stringify(user);
      sessionStorage.setItem("user", toStore);
      this.router.navigate(["/accueil"]);
    }
  }

}
