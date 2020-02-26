import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogueService } from '../services/catalogue.service';
import { TrajetService } from '../services/trajet.service';
import { Trajet } from '../model/trajet.model';

@Component({
  selector: 'app-trajet-details',
  templateUrl: './trajet-details.component.html',
  styleUrls: ['./trajet-details.component.scss']
})
export class TrajetDetailsComponent implements OnInit {

  private options = [1,2,3,4];
  private options1 = ["sans","petite","moyenne","grande"];
  private url :string;
  private currentTrajet:Trajet;
  private currentCovoitureur: User;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private catService: CatalogueService,private trajetService:TrajetService) { }

  ngOnInit() {
    this.url = atob(this.activatedRoute.snapshot.params.id);
    console.log(this.url);
    this.trajetService.getCurentTrajetUrl(this.url).subscribe(data => {
      this.currentTrajet = data;
      console.log(this.currentTrajet.lieuDepart)
      let x = this.currentTrajet.userId;
      console.log(x)
      let y = +x;
      console.log(y)
      this.catService.getUserById(y).subscribe(data => {
        this.currentCovoitureur = data;
        window.localStorage.setItem("currentCovoitureur",this.currentCovoitureur.userName);
        console.log(localStorage.getItem("currentCovoitureur"));
        console.log(this.currentCovoitureur.userName+'un dernier teste');
      })
    }, err => {
      console.log(err);
    })

  }

}
