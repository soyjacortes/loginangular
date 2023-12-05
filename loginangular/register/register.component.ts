import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HomeComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form: FormGroup;

  Mensaje: String = " Registrar Datos";

  constructor( 
    public route:Router,
  ) { 
    this.form = new FormGroup({      
      nombre: new FormControl('',Validators.required),
      apellido: new FormControl('',Validators.required),
      contrasena: new FormControl('',Validators.required),
      correo: new FormControl('',Validators.required)
    })
    
  }
  enviar() {
    const nombre = this.form.get('nombre')?.value;
    const apellido = this.form.get('apellido')?.value;
    const contrasena = this.form.get('contrasena')?.value;
    const correo = this.form.get('correo')?.value;

    if(nombre === "" || apellido === "" || contrasena === "" || correo === ""){
      this.Mensaje = 'Datos incompletos';
    }

    else{
        
      console.log(this.form.value);
      
      const formulario= this.form.value;

      localStorage.setItem('usuario', JSON.stringify(formulario));  

      this.route.navigateByUrl('/login');
    }

  }

}
