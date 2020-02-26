import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private HOST:string="http://localhost:8080/users/";
  private currentUser : User;
  private sessionUser : string;
  public sessionIdUser:string;
  private currentRate:number; 
  private url:string;
  constructor(private catService:CatalogueService, private router:Router ) {}

  ngOnInit() {
    console.log("test test")
    this.sessionIdUser = localStorage.getItem('tokenId');
    console.log(this.sessionIdUser);
    this.url=this.HOST+""+this.sessionIdUser;
    console.log(this.url);
    this.sessionUser = localStorage.getItem('token');
    console.log(this.sessionUser);
    this.catService.getUserByUserName(this.sessionUser).subscribe(data=>{
      //console.log(data._embedded.users[0]._links.self.href);
      this.currentUser = data;
      console.log(this.currentRate);
      console.log(this.currentUser.score);
      console.log("AAAAAAAAAAAAAAAa");
      console.log(this.currentUser.firstName);
      console.log(this.currentUser);

    },err=>{
      console.log(err);
    })
  }

  onUpdateUser(value: any) {
    this.catService.updateUserRessource(this.url, value).subscribe(data => {
      alert("Mise à jour effectuée avec succès");
      this.router.navigateByUrl("/user-profile");
    }, err => {
      console.log(err);
    })
  }

}
