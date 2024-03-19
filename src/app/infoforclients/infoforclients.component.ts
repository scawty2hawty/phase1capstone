import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-infoforclients',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './infoforclients.component.html',
  styleUrl: './infoforclients.component.css'
})


export class InfoforclientsComponent {
  Ename: string = ""; 
  email: string = "";
    address: string = "";
    password: string = "";
    reenterPassword: string = "";


  onSubmit() {
      console.log(`Enter Name: ${this.Ename}`);
      console.log (`Enter Email ${this.email}`);
      console.log(`password ${this.password}`);
      console.log(`password ${this.password}`);
    }



}



