import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Registration} from '../registration';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-registration',
  templateUrl: './update-registration.component.html',
  styleUrls: ['./update-registration.component.css']
})
export class UpdateRegistrationComponent implements OnInit {
  private id :any;
registration: Registration=new Registration();
  constructor(private service:RegistrationService,private router:ActivatedRoute,private rou:Router) { }

  ngOnInit(): void {
     this.id=this.router.snapshot.params['id'];
    this.service.getRegistration(this.id).subscribe(data=>{
      this.registration=data;
  },error=>console.log(error));
}


onSubmit()
    {
 this.service.updateRegistration(this.id,this.registration).subscribe(data =>{
 this.goToRegistrationAll();
    },
    error=>console.log(error));
    
  }
    goToRegistrationAll()
    {
    this.rou.navigate(['/registration']);
    }
    
}
