import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogueService } from '../services/catalogue.service';
import { TrajetService } from '../services/trajet.service';
import { Trajet } from '../model/trajet.model';
import { ReservationService } from '../services/reservation_service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-trajet-reservation',
  templateUrl: './trajet-reservation.component.html',
  styleUrls: ['./trajet-reservation.component.scss']
})
export class TrajetReservationComponent implements OnInit {


  private options = [];
  private options1 = ["sans", "petite", "moyenne", "grande"];
  private url: string;
  private currentTrajet: Trajet;
  private currentCovoitureur: User;
  private test: string;

  prixf = 0;
  selectedLevel;
  t : number;
  public users: any;
  idU;
  idT;
  


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private catService: CatalogueService, private trajetService: TrajetService,private httpClient: HttpClient) { }
  ngOnInit() {

    this.idU = localStorage.getItem("tokenId");

    this.url = atob(this.activatedRoute.snapshot.params.id);
    console.log(this.url);
    this.trajetService.getCurentTrajetUrl(this.url).subscribe(data => {
      this.currentTrajet = data;
      for (var i = 1; i <= this.currentTrajet.passager; i++) {
        this.options.push(i);
        console.log(this.options[i]); 
      }
      this.idT = this.currentTrajet.id;
      this.prixf = this.currentTrajet.prix;
      console.log(this.currentTrajet.lieuDepart)
      let x = this.currentTrajet.userId;
      console.log(x)
      let y = +x;
      console.log(y)
      this.catService.getUserById(y).subscribe(data => {
        this.currentCovoitureur = data;
        window.localStorage.setItem("currentCovoitureur", this.currentCovoitureur.userName);
        console.log(localStorage.getItem("currentCovoitureur"));
        console.log(this.currentCovoitureur.userName + 'un dernier teste');
      })
    }, err => {
      console.log(err);
    })

  }
  selected() {
    console.log(this.selectedLevel * this.currentTrajet.prix);
    this.t=this.selectedLevel;

    this.prixf = this.selectedLevel * this.currentTrajet.prix;


  }
  onRes(data: any) {
    this.httpClient.post("http://localhost:8080/reserver?place="+this.t+"&idU="+this.idU+"&idT="+this.idT,
        {})
        .subscribe(
        data  => {
        console.log("POST Request is successful ", data);
        this.router.navigateByUrl("/accueil");
        },
        error  => {
        
        console.log("Error", error);
        
        }
        );
  // this.reservationService.ReserverTrajet(this.selectedLevel,this.idU,this.idT)
    


  }


}
