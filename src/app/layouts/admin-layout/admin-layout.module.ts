import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { LoginComponent } from '../../login/login.component';
import { RegisterComponent } from '../../register/register.component';
import { ReportedComponent } from '../../reported/reported.component';
import { ReservationComponent } from '../../reservation/reservation.component';
import { ListeReservationComponent } from '../../liste-reservation/liste-reservation.component';
import { AccueilComponent } from '../../accueil/accueil.component';
import { TrajetsComponent } from '../../trajets/trajets.component';
import { NewTrajetComponent } from '../../new-trajet/new-trajet.component';
import { EditUserComponent } from '../../edit-user/edit-user.component';
import { DetailsUserComponent } from '../../details-user/details-user.component';
import { TrajetDetailsComponent } from '../../trajet-details/trajet-details.component';
import { TrajetService } from '../../services/trajet.service';
import { TrajetReservationComponent } from '../../trajet-reservation/trajet-reservation.component';



//import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot(),
    //tu y reviendras après ici !!
  /*  JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('access_token');},
        whitelistedDomains: ['localhost:8080'],
        blacklistedRoutes: ['http://localhost:8080/users']
      }
    })*/
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    LoginComponent,
    RegisterComponent,
    ReportedComponent,
    ReservationComponent,
    ListeReservationComponent,
    AccueilComponent,
    TrajetsComponent,
    NewTrajetComponent,
    EditUserComponent,
    DetailsUserComponent,
    TrajetDetailsComponent,
    TrajetReservationComponent
    
  ],
  providers : [
    TrajetService
  ]
})

export class AdminLayoutModule {}
