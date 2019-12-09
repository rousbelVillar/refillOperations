import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/SpecialClasses/MyErrorMatcher';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  formGroup: FormGroup;  //Este es un formGroup y su objetivo es inyectarle validaciones oriundas de angular usualmente en tiempo real para que el usuario se de cuenta si ha igresado algun dato mal
  constructor(private formBuilder:FormBuilder ) { 
    this.startFormGroup()
  }
  //matcher = new MyErrorStateMatcher();

  startFormGroup(){

    this.formGroup = this.formBuilder.group({
      'names': ['',Validators.required],
      'last_names':['',Validators.required],
      'cedula': ['',Validators.required],
      'user': ['',Validators.required],
      'mail': ['',Validators.required],
      'enrollment': ['',Validators.required],
      'password': ['',Validators.required],
      'password_confirm':['',Validators.required],
    });

  }
  


  ngOnInit() {
  }

  //Este metodo valida en tiempo real si la contraseña ingresada y la confirmacion de contraseña son iguales , de no ser asi estas enviaran un error al usuario
  /*checkPassword(group:FormGroup){
    let pass = group.get("password").value;
    let passwordConfirm = group.get("passwordConfirm").value;
    return pass === passwordConfirm ? null : {mismatch:true}
  }

  checkPassword(group:FormGroup){
    let pass = group.get("password").value;
    let passwordConfirm = group.get("passwordConfirm").value;
    return pass === passwordConfirm ? null : {mismatch:true}
  }*/

  getError(error){

    switch(error){

      case 'names':
        if (this.formGroup.get('names').hasError('required')) {
          return 'Por favor ingrese sus nombres.';
        }
      break;

      case 'last_names':
        if (this.formGroup.get('last_names').hasError('required')) {
          return 'Por favor ingrese sus apellidos.';
        }
      break;        
          
      case 'cedula':
        if (this.formGroup.get('cedula').hasError('required')) {
          return 'Por favor ingrese su cedula.';
        }
      break;   

      case 'user':
        if (this.formGroup.get('user').hasError('required')) {
          return 'Por favor ingrese su usuario.';
        }
      break;           
      
      case 'enrollment':
        if (this.formGroup.get('enrollment').hasError('required')) {
          return 'Por favor ingrese su matricula.';
        }
      break;      


      case 'password':
        if (this.formGroup.get('password').hasError('required')) {
          return 'Por favor ingrese sus contraseña.';
        }
      break;         
      
      case 'password_confirm':
        if (this.formGroup.get('password_confirm').hasError('required')) {
          return 'Por favor re-ingrese sus contraseña.';
        }
      break;     
      
      case 'mail':
          if (this.formGroup.get('mail').hasError('required')) {
            return 'Por favor ingrese su correo.';
          }
      break; 


    }

  }







}
