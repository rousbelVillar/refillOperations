import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Views/login/login.component';
import { HomeComponent } from './Views/home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NestedMenuComponent } from './Components/nested-menu/nested-menu.component';
import { HistoryTableComponent } from './Components/history-table/history-table.component';
import { PendingTableComponent } from './Components/pending-table/pending-table.component';
<<<<<<< HEAD
import { ServicesService } from './Services/services-call/services.service';
import { HttpClientModule } from '@angular/common/http';
=======
import { RegistrationComponent } from './Views/registration/registration.component';
>>>>>>> a557cbae55e18bc609c81adc2ef95e5176dbcf74


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NestedMenuComponent,
    HistoryTableComponent,
    PendingTableComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    ReactiveFormsModule, 
    MaterialModule, AppRoutingModule, HttpClientModule
     ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
