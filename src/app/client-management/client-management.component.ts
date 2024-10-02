import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css']
})
export class ClientManagementComponent implements OnInit {
  clients: any[] = [];
  newClient = { name: '', email: '' };
  editingClient: any = null; 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getClients(); 
  }

  getClients() {
    this.http.get('http://localhost:3000/clients').subscribe((data: any) => {
      this.clients = data; 
    });
  }

  addClient() {
    this.http.post('http://localhost:3000/clients', this.newClient).subscribe(() => {
      this.getClients(); 
      this.newClient = { name: '', email: '' };
    });
  }

 
  deleteClient(id: number) {
    this.http.delete(`http://localhost:3000/clients/${id}`).subscribe(() => {
      this.getClients();
    });
  }


  editClient(client: any) {
    this.editingClient = { ...client };
  }


  updateClient() {
    this.http.put(`http://localhost:3000/clients/${this.editingClient.id}`, this.editingClient).subscribe(() => {
      this.getClients(); 
      this.editingClient = null; 
    });
  }

  
  cancelEdit() {
    this.editingClient = null; 
  }
}
