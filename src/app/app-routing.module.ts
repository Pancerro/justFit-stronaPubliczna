import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './dashboard/main-page/main-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/strona-głowna', pathMatch: 'full'},
  {path: 'strona-głowna', component: MainPageComponent},
  {
    path: '**',
    component: MainPageComponent,
  }
 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
