import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  formGroup: FormGroup;  //Este es un formGroup y su objetivo es inyectarle validaciones oriundas de angular usualmente en tiempo real para que el usuario se de cuenta si ha igresado algun dato mal
  showPasswordError = false;
  constructor(private formBuilder:FormBuilder ) { 
    this.startFormGroup()
  }
  matcher = new MyErrorStateMatcher();

  startFormGroup(){
    this.formGroup = this.formBuilder.group({
      names: ['',Validators.required],
      last_names:['',Validators.required],
      cedula : ['',Validators.required],
      user: ['',Validators.required],
      mail: ['',Validators.email],
      enrollment: ['',Validators.required],
      password: ['',Validators.required],
      password_confirm:['']
    },{ validator: this.checkPasswords });

  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.password_confirm.value;

    return pass === confirmPass ? null : { notSame: true }
  }
  


  ngOnInit() {
    this.startFormGroup();//comienzo los validadores
  }

  keyPress(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {    
        // si es en caracter invalido evita la entrada
        event.preventDefault();
    }
}


  getError(error){//devolver

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

          if(this.formGroup.get('mail').hasError('email')){
            return 'Por favor ingrese un correo valido'
          }
        break; 


      }

  }







}
