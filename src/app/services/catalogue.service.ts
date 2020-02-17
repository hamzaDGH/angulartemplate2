import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
//import { Trajet } from '../model/trajet.model';
import { User } from '../model/user.model'

@Injectable({
  providedIn: 'root'
})

export class CatalogueService {
  public host: string = "http://localhost:8080";
  //public url2: string = this.host + "/authentifications/basicauth"

  //USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public user: User;

  constructor(private httpClient: HttpClient) { }
  //partie user
  public getUsersByUserNameAndPassword(mc: string,mc2:string){
    return this.httpClient.get(this.host+"/users/search/byUserName?mc="+mc+"&mc2="+mc2,{observe : 'response'});
  }

  public addUserRessource(url, data): Observable<User> {
    return this.httpClient.post<User>(url, data)
  }

  public logout() {
    localStorage.removeItem('token');
  }
  
  
  public get loggedIn(): boolean{
    return localStorage.getItem('token') !==  null;
  }

}