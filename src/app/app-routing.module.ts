import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { MainPageComponent } from './dashboard/main-page/main-page.component';
import { DataprivacyComponent } from './menu/dataprivacy/dataprivacy.component';


const routes: Routes = [
  { path: '', redirectTo: '/strona-głowna', pathMatch: 'full'},
  {path: 'strona-głowna', component: MainPageComponent},
  {path: 'dataprivacy', component: DataprivacyComponent},
  ];
  const routerOptions: ExtraOptions = {
    useHash: true,
    anchorScrolling: 'enabled',
  };
@NgModule({
  imports: [RouterModule.forRoot(routes ,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
