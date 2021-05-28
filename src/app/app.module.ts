import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import {HttpClientModule} from '@angular/common/http';
import { SaveRegistrationComponent } from './save-registration/save-registration.component';
import { UpdateRegistrationComponent } from './update-registration/update-registration.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationListComponent,
    SaveRegistrationComponent,
    UpdateRegistrationComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
