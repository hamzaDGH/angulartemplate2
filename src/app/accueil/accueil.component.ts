import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrajetService } from '../services/trajet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  trajetSubscription : Subscription;
  trajets: any;
  counter = Array;

  constructor(private trajetService : TrajetService,private router:Router) { }

  ngOnInit() {
    this.trajetService.getTrajetsFromServer();

    this.trajetSubscription = this.trajetService.trajetSubject.subscribe(
      (response : any[]) =>
      {
        this.trajets = response;
      }
    );
    this.trajetService.emitTrajetSubject();
  }
  onDetails(t){
    let url = t._links.self.href;
    console.log(url);
    console.log(btoa(url));
    //this.router.navigate(["/edit-user/" +btoa(url)]);
    this.router.navigateByUrl("/trajet-details/" + btoa(url));
  }
  onReserve(t){
    let url = t._links.self.href;
    this.router.navigateByUrl("/reservation/" + btoa(url));
  }

}
