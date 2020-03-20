import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu/menu.component';
import { EmployeesComponent } from './dashboard/employees/employees.component';
import { EquipmentComponent } from './dashboard/equipment/equipment.component';
import { ProductComponent } from './dashboard/product/product.component';
import { ActivitiesComponent } from './dashboard/activities/activities.component';
import { WelcomePageComponent } from './dashboard/welcome-page/welcome-page.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { ContactComponent } from './dashboard/contact/contact.component';
import { FooterComponent } from './menu/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EmployeesComponent,
    EquipmentComponent,
    ProductComponent,
    ActivitiesComponent,
    WelcomePageComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
