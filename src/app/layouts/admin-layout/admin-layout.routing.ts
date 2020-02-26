import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { RegisterComponent } from '../../register/register.component';
import { LoginComponent } from '../../login/login.component';
import { ReportedComponent } from '../../reported/reported.component';
import { ReservationComponent } from '../../reservation/reservation.component';
import { ListeReservationComponent } from '../../liste-reservation/liste-reservation.component';
import { AccueilComponent } from '../../accueil/accueil.component';
import { TrajetsComponent } from '../../trajets/trajets.component';
import { NewTrajetComponent } from '../../new-trajet/new-trajet.component';
import { EditUserComponent } from '../../edit-user/edit-user.component';
import { DetailsUserComponent } from '../../details-user/details-user.component';
import { TrajetDetailsComponent } from '../../trajet-details/trajet-details.component';
import { TrajetReservationComponent } from '../../trajet-reservation/trajet-reservation.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'reported', component: ReportedComponent },
    { path: 'reservation', component: ReservationComponent },
    { path: 'liste-reservation', component: ListeReservationComponent },
    { path: 'accueil', component: AccueilComponent },
    { path: 'trajets', component: TrajetsComponent },
    { path: 'new-trajet', component: NewTrajetComponent },
    { path: 'details-user', component: DetailsUserComponent },
    { path: 'trajet-details/:id', component: TrajetDetailsComponent },
    { path: 'edit-user/:id', component: EditUserComponent },
    { path: 'reservation/:id', component: TrajetReservationComponent }



];
