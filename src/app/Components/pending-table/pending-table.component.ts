import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  symbol1: string;
  symbol2: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', symbol1: 'Ne', symbol2: 'Ne' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', symbol1: 'Ne', symbol2: 'Ne' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', symbol1: 'Ne', symbol2: 'Ne' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', symbol1: 'Ne', symbol2: 'Ne' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', symbol1: 'Ne', symbol2: 'Ne' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', symbol1: 'Ne', symbol2: 'Ne' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', symbol1: 'Ne', symbol2: 'Ne' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', symbol1: 'Ne', symbol2: 'Ne' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', symbol1: 'Ne', symbol2: 'Ne' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', symbol1: 'Ne', symbol2: 'Ne' }
];


@Component({
  selector: 'app-pending-table',
  templateUrl: './pending-table.component.html',
  styleUrls: ['./pending-table.component.css']
})
export class PendingTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'symbol1', 'symbol2'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
