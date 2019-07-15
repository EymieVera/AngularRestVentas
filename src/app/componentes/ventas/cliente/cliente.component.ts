import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../_services/cliente.service';

declare const $;
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  // styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: any = [];
  model: any = new Object();
  isEdit = false;
  constructor(private clienteService: ClienteService) {
    
   }

  ngOnInit() {
    this.getClientes();
  }


  getClientes() {
    this.clienteService.getClientes()
    .subscribe(x => {
      this.clientes = x;
    });
  }

  getPost() {
    this.clienteService.postCliente(this.model as any)
    .subscribe(x => {
      this.getClientes();
      this.hideModal();
    });
  }

  delete(item) {
    this.clienteService.deleteCliente(item as any)
    .subscribe(x => {
      this.getClientes();
    });
  }

  put() {
    this.clienteService.putCliente(this.model as any)
    .subscribe(x => {
      this.getClientes();
      this.hideModal();
    });
  }

  showModal() {
    this.model = new Object();
    this.isEdit = false;
    $('#modelId').modal('show');
  }

  editModal(item) {
    this.isEdit = true;
    const temp = Object.assign({}, item)
    this.model = temp;
    console.log(this.model);
    $('#modelId').modal('show');
  }

  hideModal() {
    $('#modelId').modal('hide');
  }

}
