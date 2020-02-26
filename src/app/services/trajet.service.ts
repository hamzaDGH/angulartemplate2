import { Injectable } from "@angular/core";
import { Subscription, Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Trajet } from '../model/trajet.model';

@Injectable()
export class TrajetService
{
    trajetSubject = new Subject<any[]>();

    private trajets: any;
    public ROOT_URL = 'http://localhost:8080'

    constructor(private httpClient : HttpClient){
    //  this.getTrajetsFromServer();
    }

    emitTrajetSubject()
    {
      this.trajetSubject.next(this.trajets);
    }

    getTrajetsFromServer()
    {
      this.httpClient
      .get<any[]>(this.ROOT_URL+'/trajets')
      .subscribe(
        (response) => {
          this.trajets = response;
          this.emitTrajetSubject();
          console.log('kkkk');
        },
        (error) => {
          console.log("Error"+error);
        }
      )
    }
    addTrajetToServer(url,data) : Observable<Trajet>
    {
      return this.httpClient.post<Trajet>(url,data);
    }
  deleteTrajetRessource(url){ //hna katkhioud lurl et tatmchi tratieh f l'appel 
    return this.httpClient.delete(url);
  }
  public getCurentTrajetUrl(url):Observable<Trajet>{
    return this.httpClient.get<Trajet>(url);
  }

}
