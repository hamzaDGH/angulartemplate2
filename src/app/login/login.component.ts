import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogueService } from '../services/catalogue.service'
import { Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public users: any;
  user : User ;
  public errorMessage: string = 'Invalid Credentials';
  public username: string = "";
  public password: string = "";
  public successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private catService: CatalogueService
  ) { }

  ngOnInit(): void {
  }

  onConnect(form: any) {
    //console.log(form.username);
    console.log(this.users);
    this.username = form.username;
    this.password = form.password;
    //console.log(this.username);
    console.log('debut test');
    this.catService.getUsersByUserNameAndPassword(this.username, this.password).subscribe(data => {
      this.users = data;
      console.log(this.users);
      console.log("lol1")
      console.log(this.users.body.userName+"hahaha ca marche");
      console.log("test token 1");
      let x =window.localStorage.setItem('merde',this.users.body);
      
       this.user = this.users.body; 
       console.log(this.user.userName+"sdjbfkmjdbgkudhbg");
      console.log(localStorage.getItem('merde')); 
      console.log("lol2")
      window.localStorage.setItem('token', this.users.username);
      console.log('token startss');
      console.log(localStorage.getItem('token'));
      console.log('token end');
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/dashboard']);
      console.log("test21");


    }, err => {
      //console.log(err);
      console.log("test mnt")
      this.invalidLogin = true;
      this.loginSuccess = false;
    });

    //console.log(localStorage.getItem('access_token'));   
    console.log("ok");
  }
}
