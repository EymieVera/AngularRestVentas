import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from '../_helper/helper.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  ClienteUrl = this.helper.baseUrl('clientes'); 
  constructor(private htpp: HttpClient,
    private helper:HelperService) { }

  getClientes(){
    return this.htpp.get<any>(this.ClienteUrl)
    .pipe(map(data => data));
  }

  postCliente(data: any){
    return this.htpp.post<any>(this.ClienteUrl, data)
    .pipe(map(data => data));
  }

  deleteCliente(item: any){
    const url = this.ClienteUrl + '/'+ item.idCliente;
    return this.htpp.delete<any>(url)
    .pipe(map(data => data));
  }

  putCliente(item: any){
    const url = this.ClienteUrl + '/'+ item.idCliente;
    return this.htpp.put<any>(url, item)
    .pipe(map(data => data));
  }
}
