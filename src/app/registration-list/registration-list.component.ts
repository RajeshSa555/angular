import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Registration} from '../registration';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {

  registration: Registration[]=[];
  constructor(private service:RegistrationService,private router:Router) { 
  
    
  }

  ngOnInit(): void {
   this.getRegist();
  }


 private getRegist()
  {
    this.service.getRegistrationList().subscribe(data => {
      this.registration=data;
    });
  }

  updatereggistration(id:any)
  {
    this.router.navigate(['updateregistration',id]);
  }
 
  deleteregistration(id:any)
{
  this.service.deleteRegistration(id).subscribe(data=>{
    console.log(data);
    this.getRegist();
  })
}

}
