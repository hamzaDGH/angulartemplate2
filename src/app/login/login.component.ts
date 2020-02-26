import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogueService } from '../services/catalogue.service'
import { User } from '../model/user.model';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public users: any;
  public errorMessage: string = 'Invalid Credentials';
  public username: string = "";
  public password: string = "";
  public tAdmin: string = "";
  public tUser: string = "";
  public successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private catService: CatalogueService,
  ) { }

  ngOnInit(): void {
  }

  onConnect(form: any) {
    
    //console.log(form.username);
    console.log(this.users);
    this.username = form.username;
    this.password = form.password;
    if (this.username === "admin" && this.password === "admin") {
      //window.location.reload();

      window.localStorage.setItem("sessionAdmin",this.username);
      //this.tAdmin=localStorage.getItem("sessionAdmin");
      this.router.navigate(['/dashboard']);
    }
    else {
      console.log('debut test sessionUser');
      this.catService.getUsersByUserNameAndPassword(this.username, this.password).subscribe(data => {
        this.users = data;
        //console.log(this.users.body);    
        window.localStorage.setItem('token', this.users.body.userName);
        //this.tUser=localStorage.getItem("sessionUser");
        window.localStorage.setItem('tokenId', this.users.body.id);//test 3la hada wach kayen wla la
        //console.log(localStorage.getItem('tokenId'));
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Login Successful.';
        this.router.navigateByUrl("/user-profile");
        console.log("fin test sessionUser");
       // this.nav.ngOnInit();
      }, err => {
        //console.log(err);
        console.log("test mnt")
        this.invalidLogin = true;
        this.loginSuccess = false;
      });
    }
  }
}
