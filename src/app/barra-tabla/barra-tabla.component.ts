import { Component, EventEmitter, Output } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-barra-tabla',
  templateUrl: './barra-tabla.component.html',
  styleUrls: ['./barra-tabla.component.scss']
})
export class BarraTablaComponent {

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
