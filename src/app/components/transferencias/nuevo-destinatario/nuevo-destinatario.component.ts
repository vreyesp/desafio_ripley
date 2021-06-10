import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { TransferenciasService } from 'src/app/services/transferencias.service';
import { RutValidator } from 'ng9-rut';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-destinatario',
  templateUrl: './nuevo-destinatario.component.html',
  styleUrls: ['./nuevo-destinatario.component.css'],
  providers: [TransferenciasService]

})
export class NuevoDestinatarioComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  bancos;
  tipoCuenta;
  public destinatarioForm: FormGroup;
  public regexNum = new RegExp(/^[0-9]+$/);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(private _transferencias: TransferenciasService, private fb: FormBuilder,
    private _router: Router,private rutValidator: RutValidator,) {

    this.destinatarioForm = this.fb.group({
      rut: ['', [Validators.required, Validators.minLength(8), this.rutValidator]],
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(this.regexNum)]],
      banco: ['', [Validators.required]],
      tipoCuenta: ['', [Validators.required]],
      nroCuenta: ['', [Validators.required, Validators.pattern(this.regexNum)]]
    })

    this._transferencias.getBancos().subscribe(
      response => {

        this.bancos = response.banks;
        console.log('this.bancos', this.bancos)

      },
      error => {
        console.log('error', error)
        Swal.fire({
          icon: 'error',
          title: 'No hay bancos Registrados',
          text: error.error.message,
        });

      }
    )

    this.getTipoCuenta();
  }

  ngOnInit(): void {
  }

  getTipoCuenta(){
    this._transferencias.getTipoCUenta().subscribe(
      response => {
        console.log("response",response);

        if (response.success) {
          this.tipoCuenta = response.data;
        } else {

          Swal.fire({
            icon: 'error',
            title: 'No hay Tipos de Cuentas Registrados',
            text: response.msg,
          });
        }
      },
      error => {
        console.log('error', error)
        Swal.fire({
          icon: 'error',
          title: 'No hay Tipos de Cuentas Registrados',
          text: "Error inesperado del server",
        });

      }
    )
  }


  crearDestinatario() {
    this._transferencias.postNuevoDestinatario(this.destinatarioForm.value).subscribe(
      response => {
       if (response["success"]) {
        Swal.fire({
          icon: 'success',
          title: 'Completado',
          text: "Destinatario creado",
        }).then(()=>{
          this._router.navigate(['/home']);
        })

       }else{
        Swal.fire({
          icon: 'error',
          title: 'Error al crear destinatario',
          text: response["msg"],
        });
       }
      },
      error => {
        console.log('error', error)
        Swal.fire({
          icon: 'error',
          title: 'Error al crear destinatario',
          text: error.error.message,
        });
      }
    )
  }



}
