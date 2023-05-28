import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceUsuarioService {

  constructor() { }


  //Todo: Array para los Usuarios
  private infoUsuario: Usuario[] = [];
  private contSMayores: number = 0;
  private contSMenores: number = 0;

  //Todo: Traer Usuario
  getUsuario():Usuario[] {
    return this.infoUsuario;
  }

  //Todo: Añadir Usuario
  addUsuario(usuario : Usuario){
    this.infoUsuario.push(usuario);
  }

  eliminarUsuario(usuarioID: number) {
    this.infoUsuario.splice(usuarioID, 1);
  }

 addCantidades(/*contMayores: number, contMenores: number*/usuario : Usuario) {
  /*
    console.log(contMayores);
    console.log(contMenores);
    this.contSMayores += contMayores;
    this.contSMenores += contMenores;
  */
    if (parseInt(usuario.edad) > 17) {
      this.contSMayores++;
    } else {
      this.contSMenores++;
    }
  }

  getCantidades(): { contMayores: number, contMenores: number } {
    return { contMayores: this.contSMayores, contMenores: this.contSMenores };
  }
}
