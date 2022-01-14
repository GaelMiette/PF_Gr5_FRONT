import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router ) { }

  user = null

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    console.log(this.user)
  }

  logout(){
    this.user = null;
    sessionStorage.setItem("user", null);
    this.route.navigate(["/home"]);
  }

}
