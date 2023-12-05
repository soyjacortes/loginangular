import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-contrasena',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, LoginComponent],
  templateUrl: './contrasena.component.html',
  styleUrl: './contrasena.component.css'
})
export class ContrasenaComponent {

  form: FormGroup;

  Mensaje: String = " Registrar Datos";

  constructor( 
    public route:Router,
  ) { 
    this.form = new FormGroup({
      correo: new FormControl('',Validators.required),
      contrasena: new FormControl('',Validators.required),
      confirmcontrasena: new FormControl('',Validators.required)
    });
    
  }
  enviar() {
    const correo = this.form.get('correo')?.value;
    const contrasena = this.form.get('contrasena')?.value;
    const confirmcontrasena = this.form.get('confirmcontrasena')?.value;

    if(correo === "" || contrasena === "" || confirmcontrasena === ""){
      this.Mensaje = 'Datos incompletos';
    }

    else{
      if(contrasena == confirmcontrasena){
        console.log(this.form.value);

        const datoslogin = localStorage.getItem('usuario')

        if(datoslogin){
          const datos = JSON.parse(datoslogin); 

          if (correo === datos.correo ) {

            datos.contrasena = confirmcontrasena;

            localStorage.setItem('usuario', JSON.stringify(datos))
            this.Mensaje = 'Datos correctas';
            this.route.navigateByUrl('/login');
          }
        }

    } 
    else {
      this.Mensaje = 'Las Contraseñas no son iguales';
      console.log(this.form.value);
    }
    }
    
    

    

  }

}