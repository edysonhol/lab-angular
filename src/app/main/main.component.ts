import { Component, EventEmitter, Output } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

   //Todo: Mostrar Modal
   modalSwitch: boolean = false;

   mostrarTabla: boolean = false;

   @Output() tablaEvent = new EventEmitter<boolean>();

   constructor(private modalSS:ServiceService){

   }


   toggleTabla() {
     this.mostrarTabla = !this.mostrarTabla;
     this.tablaEvent.emit(this.mostrarTabla);
   }

   ngOnInit(): void {
     this.modalSS.$modal.subscribe((valor)=>this.modalSwitch = valor);
   }

   openModal(){
     this.modalSwitch = true;
   }
}
