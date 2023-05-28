import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { Usuario } from './usuario';
import { ServiceUsuarioService } from './service-usuario.service';

@Component({
  selector: 'app-registro-formulario',
  templateUrl: './registro-formulario.component.html',
  styleUrls: ['./registro-formulario.component.scss']
})
export class RegistroFormularioComponent {

  public myForm: FormGroup;
  public contMayores: number = 0;
  public contMenores: number = 0;

  usuarios: Usuario[] = [];

  constructor(private modalSS:ServiceService, private userSS:ServiceUsuarioService){

    this.myForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required]),
      cedula: new FormControl('', [Validators.required])
    });

  }

  ngOnInit(): void {
  }

  //Todo: Funcion Cerrar Modal
  closeModal(){
    this.modalSS.$modal.emit(false);
  }

  //Todo: Metodo Guardar Usuarios
  userRegister(nombre: string, apellido: string, edad: string, cedula: string) {

    const usuario = new Usuario(nombre, apellido, edad, cedula);
  /*
    if (parseInt(usuario.edad) > 17) {
      this.userSS.addCantidades(1,0);
    } else {
      this.userSS.addCantidades(0,1);
    }
  */
    this.userSS.addCantidades(usuario);
    this.userSS.addUsuario(usuario);
  }

}
