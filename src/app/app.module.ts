import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesComponent } from './dashboard/employees/employees.component';
import { EquipmentComponent } from './dashboard/equipment/equipment.component';
import { ProductComponent } from './dashboard/product/product.component';
import { ActivitiesComponent } from './dashboard/activities/activities.component';
import { NewsPageComponent } from './dashboard/news-page/news-page.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { ContactComponent } from './dashboard/contact/contact.component';
import { FooterComponent } from './menu/footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgImageSliderModule } from 'ng-image-slider';
import { DataServiceService } from './services/data-service.service'; 
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './dashboard/main-page/main-page.component';
import { DataprivacyComponent } from './menu/dataprivacy/dataprivacy.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EquipmentComponent,
    ProductComponent,
    ActivitiesComponent,
    NewsPageComponent,
    ContactComponent,
    FooterComponent,
    MainPageComponent,
    DataprivacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    NgImageSliderModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
