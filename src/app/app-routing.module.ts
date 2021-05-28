import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { SaveRegistrationComponent } from './save-registration/save-registration.component';
import { UpdateRegistrationComponent } from './update-registration/update-registration.component';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'registration',component:RegistrationListComponent},
  {path:'saveregistration',component:SaveRegistrationComponent},
  {path:'updateregistration',component:UpdateRegistrationComponent},
  {path:'updateregistration/:id',component:UpdateRegistrationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
