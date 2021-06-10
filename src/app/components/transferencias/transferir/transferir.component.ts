import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { TransferenciasService } from 'src/app/services/transferencias.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.css'],
  providers: [TransferenciasService]
})
export class TransferirComponent implements OnInit {
  myControl: FormControl
  monto
  destinatarios: string[] = [];
  desArray = [];
  filteredOptions: Observable<string[]>;
  montoTra: FormGroup;

  keyword = 'name';
  data;
  montoTotal: any

  selected: any;

  constructor(private _transferencias: TransferenciasService, private fb: FormBuilder, private _router: Router) {
      this.myControl = new FormControl('')
      this.montoTra = this.fb.group({
        monto: ['']
      })
      this.cargardestinatarios()
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  }
  private _filter(value: string): string[] {
    if (value) {
      const filterValue = value.toLowerCase();
      return this.destinatarios.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }else{
      return []
    }


  }


  cargardestinatarios(): void{
    this._transferencias.getMisdestinatarios().subscribe(
      response => {
        if (response.success) {
          this.destinatarios = response.data.map(data => data.nombre);
          this.data = response.data.map(data => {
            return {...data, id: data.rut, name: data.nombre};
          });
          this.desArray =  this.destinatarios;
          console.log("this.desArray", this.desArray);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'No destinatarios',
            text: response.msg,
          });
        }
      },
      error => {
        console.log('error', error)
        Swal.fire({
          icon: 'error',
          title: 'No destinatarios',
          text: error.error.message,
        });

      }
    )
  }





  selectEvent(item) {
    this.selected = item;
  }

  onChangeSearch(val: string) {
  }

  onFocused(e){
  }

  transferir(): void {
    console.log("this.montoTotal",this.montoTotal);


    this.montoTotal = parseInt(this.montoTotal, 10);
    console.log({...this.selected, montotran: this.montoTotal });
    this._transferencias.transferir({...this.selected, montotran: this.montoTotal }).subscribe(
      response => {
        if (response.success) {
          Swal.fire({
            icon: 'success',
            title: 'Completado',
            text: 'Transferencia exitosa',
          }).then(()=>{
            this._router.navigate(['/home'])
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'No se completo la transferencia',
            text: response.msg,
          });
        }
      },
      error => {
        console.log('error', error)
        Swal.fire({
          icon: 'error',
          title: 'No se completo la transferencia',
          text: error.error.message,
        });
      }
    )
  }
}
