import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full',
  },
  {
    path: 'trajet-details',
    redirectTo: 'trajet-details',
    pathMatch: 'full',
  }, 
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full',
  }, 
  {
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'details-user',
    redirectTo: 'details-user',
    pathMatch: 'full',
  },  
  {
    path: 'edit-user',
    redirectTo: 'edit-user  ',
    pathMatch: 'full',
  }, 
  {
    path: 'register',
    redirectTo: 'register',
    pathMatch: 'full',
  },{
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
