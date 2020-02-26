import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../model/reservation.model';



@Injectable()
export class ReservationService
{
    
    public URL = 'http://localhost:8080'

    constructor(private httpClient : HttpClient){
    
    }

    public ReserverTrajet(place: number,idU: number,IdT:number){
        return this.httpClient.post(this.URL+"/reserver",
        {
        "place":  place,
        "idU":  idU,
        "idT":  IdT
        })
        .subscribe(
        data  => {
        console.log("POST Request is successful ", data);
        },
        error  => {
        
        console.log("Error", error);
        
        }
        );
      }

}
