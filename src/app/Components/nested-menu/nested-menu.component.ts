import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../Services/services-call/services.service';

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

  constructor(private servicesService: ServicesService ) { }

  ngOnInit() {

    this.servicesService.getServicesParent()
    .subscribe(data => {
      this.dataLength = data.length;
      this.services = data;
    });

    this.servicesService.getServices1()
    .subscribe(data => {
      this.dataLength = data.length;
      this.services1 = data;
    });

    this.servicesService.getServices2()
    .subscribe(data => {
      this.dataLength = data.length;
      this.services2 = data;
      console.log(this.services2);
    });

    this.servicesService.getServices3()
    .subscribe(data => {
      this.dataLength = data.length;
      this.services3 = data;
    });
  }

}
