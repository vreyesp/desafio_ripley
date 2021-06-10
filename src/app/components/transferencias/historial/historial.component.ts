import  Swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { TransferenciasService } from 'src/app/services/transferencias.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
  providers: [TransferenciasService]
})
export class HistorialComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'rut', 'banco', 'tipocuenta', 'monto'];
  historial = [];
  dataSource = ELEMENT_DATA;

  constructor(private _transferencias: TransferenciasService) {
    this.getHistorial()
  }

  ngOnInit(): void {
  }

getHistorial(): void{
  console.log("historiol");

  this._transferencias.getHistorial().subscribe(
    response => {
      console.log("historiol", response);
     if (response["success"]) {
    this.historial = response.data;
    this.dataSource = this.historial;
     }
    },
    error => {
      console.log('error', error)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrio un problema, intente mas tarde',
      });
    }
  )
}


}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
