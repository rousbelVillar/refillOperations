import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ServicesService } from '../../Services/services-call/services.service';

@Component({
  selector: 'app-solicitudes-form',
  templateUrl: './solicitudes-form.component.html',
  styleUrls: ['./solicitudes-form.component.css']
})
export class SolicitudesFormComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert = 'This field is required';
  solicitudes: any;
  readOnly: true;
  services: any;
  public dataLength: number;


  constructor(private formBuilder: FormBuilder, private servicesService: ServicesService) { }

  ngOnInit() {
    this.createForm();
    this.servicesService.getServicesParent()
    .subscribe(data => {
      this.dataLength = data.length;
      this.services = data;
      console.log(this.services);
    });
  }

  createForm() {
    this.formGroup = this.formBuilder.group({

      descripcion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      servicio: [this.services, Validators.required],
      carrera: ['', Validators.required],
      costo: ['', Validators.required]
    });
  }

  get carrera() {
    return this.formGroup.get('carrera') as FormControl;
  }

  onSubmit(post) {
    this.solicitudes = post;
    console.log(this.solicitudes);
  }

}


