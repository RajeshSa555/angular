import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from '../registration';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-save-registration',
  templateUrl: './save-registration.component.html',
  styleUrls: ['./save-registration.component.css']
})
export class SaveRegistrationComponent implements OnInit {

  registration: Registration=new Registration();
  constructor(private service:RegistrationService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.service.goToSaveRegistration(this.registration).subscribe(data=>{console.log(data)},
    error => console.error());
    this.goToRegistrationAll();
  }
  goToRegistrationAll()
  {
  this.router.navigate(['/registration']);
  }

  
}
