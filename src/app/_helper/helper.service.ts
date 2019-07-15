import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  
  baseUrl(base:string):string{
    return `http://localhost:8080/apiVentasCorp/v1/${base}`
  }
  constructor(private htpp: HttpClient) { }

}
