import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../Services/services-call/services.service';
import { SolicitudesFormComponent } from '../solicitudes-form/solicitudes-form.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-nested-menu',
  templateUrl: './nested-menu.component.html',
  styleUrls: ['./nested-menu.component.css']
})
export class NestedMenuComponent implements OnInit {
  services: any;
  services1: any;
  services2: any;
  services3: any;
  public dataLength: number;

  constructor(private servicesService: ServicesService, private dialog: MatDialog ) { }

  ngOnInit() {

  }
  openNewRequest(): void {
    this.dialog.open(
      SolicitudesFormComponent, {
        width: '640px', disableClose: true
      });
  }

}
