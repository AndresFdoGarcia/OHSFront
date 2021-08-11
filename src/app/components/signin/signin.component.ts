import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user = {
    email : '',
    code : ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  signIn(){
        
    this.authService.signIN(this.user).subscribe(
      res =>{
        
        localStorage.setItem('token',res.token)
        localStorage.setItem('position',res.position)
        this.router.navigate(['/'])
      },
      err => console.log(err)
    )
  }

  dataon(){
    this.user.email = "sergiof@ohsreport.com";
    this.user.code = "99846152";
  }

  data2on(){
    this.user.email ="juanp@ohsreport.com";
    this.user.code ="1234567";

  }

}
