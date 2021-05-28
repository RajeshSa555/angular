import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Registration} from './registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl="http://localhost:8099/api/getall";
  private saveUrl="http://localhost:8099/api/save";
  private getidUrl ="http://localhost:8099/api/get";
  private updateUrl ="http://localhost:8099/api/update";
  private deleteUrl ="http://localhost:8099/api/delete";
  constructor(private http:HttpClient) { }


   getRegistrationList():Observable<Registration[]>
   {
     return this.http.get<Registration[]>(`${this.baseUrl}`);
   }

     goToSaveRegistration(registration:Registration):Observable<Object>
     {
       return this.http.post(`${this.saveUrl}`,registration);
     }

        getRegistration(id:number):Observable<Registration>
        {
      return this.http.get<Registration>(`${this.getidUrl}/${id}`);
        }


        updateRegistration(id:number,registration:Registration):Observable<Object>
        {
         return this.http.put(`${this.updateUrl}/${id}`,registration);
        }

        deleteRegistration(id:number):Observable<Object>
        {
          return this.http.delete(`${this.deleteUrl}/${id}`);
        }
    }