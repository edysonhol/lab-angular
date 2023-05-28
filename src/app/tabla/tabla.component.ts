import { Component } from '@angular/core';
import { Usuario } from '../registro-formulario/usuario';
import { ServiceUsuarioService } from '../registro-formulario/service-usuario.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent {
  constructor(private userSS:ServiceUsuarioService){
  }

  usuario: Usuario[] = [];

  ngOnInit(): void {
    this.usuario = this.userSS.getUsuario();
  }

  eliminarUsuario(index:number){
    this.userSS.eliminarUsuario(index);
  }


}
