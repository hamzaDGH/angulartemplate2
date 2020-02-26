import { Component, OnInit } from '@angular/core';
import { TrajetService } from '../services/trajet.service';
import { Router } from '@angular/router';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-new-trajet',
  templateUrl: './new-trajet.component.html',
  styleUrls: ['./new-trajet.component.scss']
})
export class NewTrajetComponent implements OnInit {

  public users : any;
  valise = 'sans';
  passagers = '1';
  constructor(private trajetService : TrajetService
    ,private router :Router,private catService:CatalogueService) { }

  ngOnInit() {
    this.users = localStorage.getItem("tokenId");
    console.log(this.users)
  }
  onSubmit(data : any)
  {
    this.trajetService.addTrajetToServer(this.trajetService.ROOT_URL+"/trajets",data)
    .subscribe(res=>{
      this.trajetService.emitTrajetSubject();
      this.router.navigateByUrl("/trajets")
    },err=>{
      console.log(err);
    });
    
  }

}
