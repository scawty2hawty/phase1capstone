import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {

MTS: string ="";
ET:string="";
NP:string="";

onSubmit(){
  console.log(`date: ${this.MTS}`);
 console.log(`placeholder:${this.NP}`)
  console.log(`placeholder:${this.ET}`)
}

}
