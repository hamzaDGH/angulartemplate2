import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private catService:CatalogueService ,private router:Router) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  onRegister(data : any){
    console.log(data);
    this.catService.addUserRessource(this.catService.host+"/users",data).subscribe(res=>{
      console.log(res.firstName);
      this.router.navigateByUrl("/login");

    },err=>{
      console.log(err);
    })
  } 

}
