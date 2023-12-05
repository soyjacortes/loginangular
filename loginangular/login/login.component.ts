import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContrasenaComponent } from '../contrasena/contrasena.component';
import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RegisterComponent, ContrasenaComponent, FormsModule, ReactiveFormsModule, HomeComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  Mensaje: String = "Ingresar Datos";
  form: FormGroup;

  constructor( 
    public route:Router,
  ) { 
    this.form = new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });
    
  }

  registrar() {
    this.route.navigateByUrl('/register');
  }

  olvido() {
    this.route.navigateByUrl('/contrasena');
  }

  enviar() {
    
    console.log(this.form.value);
    const emailValue = this.form.get('email')?.value;
    const passwordValue = this.form.get('password')?.value;

    if(emailValue === "" || passwordValue === ""){
      this.Mensaje = 'Datos incompletos';
    }

    else{
      const datoslogin = localStorage.getItem('usuario')

      if(datoslogin){
        const datos = JSON.parse(datoslogin);

        if (emailValue === datos.correo && passwordValue === datos.contrasena) {
          this.Mensaje = 'Datos correctas';
          this.route.navigateByUrl('/home');
        } else {
          this.Mensaje = 'Datos incorrectas';
        }

      }
    }

    

    

  }
}
 