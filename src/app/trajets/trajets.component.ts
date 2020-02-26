import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrajetService } from '../services/trajet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trajets',
  templateUrl: './trajets.component.html',
  styleUrls: ['./trajets.component.scss']
})
export class TrajetsComponent implements OnInit {
  trajetSubscription : Subscription;
  trajets: any;

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
  onDelete(url)
  {
    let conf = confirm(" suuuure ???!!");
    if (conf) {
      this.trajetService.deleteTrajetRessource(url._links.self.href)
      .subscribe(
        data => {
          this.trajetService.emitTrajetSubject();
          console.log("Deleted");
      }, 
      err => {
        console.log(err);
      });
    }
  }
}


