import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RutValidator } from 'ng9-rut';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user;
  constructor(private fb: FormBuilder,
    private rutValidator: RutValidator,

  ) {
    this.user = this.fb.group({
      rut: ['', [Validators.required, rutValidator, Validators.minLength(8)]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }


  login(user) {
    console.log('Datos de User', user);


  }
}
