import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './dashboard/welcome-page/welcome-page.component';
import { ActivitiesComponent } from './dashboard/activities/activities.component';
import { EmployeesComponent } from './dashboard/employees/employees.component';
import { EquipmentComponent } from './dashboard/equipment/equipment.component';
import { ProductComponent } from './dashboard/product/product.component';


const routes: Routes = [
  { path: '', redirectTo: '/strona-głowna', pathMatch: 'full'},
  {path: 'strona-głowna', component: WelcomePageComponent},
  {
    path: 'zajecia',
    component: ActivitiesComponent,
  },
  {
    path: 'pracownicy',
    component: EmployeesComponent,
  },
  {
    path: 'sprzet',
    component: EquipmentComponent,
  },
  {
    path: 'oferta',
    component: ProductComponent,
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
