import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.scss']
  
})
export class DetailsUserComponent implements OnInit {
  private HOST:string="http://localhost:8080/users/";
  private currentRate :number;
  private userProfile : User;
  private url : string;
  constructor(private catService:CatalogueService, private router:Router) { }

  ngOnInit() {
    console.log(localStorage.getItem("currentCovoitureur"));
    this.catService.getUserByUserName(localStorage.getItem("currentCovoitureur")).subscribe(data=>{
      this.userProfile = data;
      console.log(this.userProfile.id);
      this.url=this.HOST+""+this.userProfile.id;
    console.log(this.url);
    })
  }
  onSubmit(value : any){
    this.catService.updateUserRessource(this.url, value).subscribe(data => {
      alert("Votre notation a bien été prise enc compte pour l'utilisateur "+this.userProfile.userName);
      this.router.navigateByUrl("/details-user");
    }, err => {
      console.log(err);
    })
  }

}
