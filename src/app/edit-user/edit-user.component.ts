import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  private url: string;
  private currentUser: User;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private catService: CatalogueService) { }

  ngOnInit() {
    this.url = atob(this.activatedRoute.snapshot.params.id);
    console.log(this.url);
    this.catService.getCurentUserUrl(this.url).subscribe(data => {
      this.currentUser = data;
    }, err => {
      console.log(err);
    })

  }

  onUpdateUser(value: any) {
    this.catService.updateUserRessource(this.url, value).subscribe(data => {
      alert("Mise à jour effectuée avec succès");
      this.router.navigateByUrl("/dashboard");
    }, err => {
      console.log(err);
    })
  }

}
