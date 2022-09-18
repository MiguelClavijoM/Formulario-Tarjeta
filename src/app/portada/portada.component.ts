import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss']
})
export class PortadaComponent implements OnInit {

  ngOnInit(): void {
  }

  formulario: FormGroup;

  tiposDocumentos = ['Cédula', 'Cédula de extranjería', 'Tarjeta de identidad'];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formulario = this.formBuilder.group({
      tipoDocumento: [null, [Validators.required]],
      numeroDocumento: [null, [Validators.required]],
      celular: [
        null,
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ],
      ],
      nombre: [null, [Validators.required]],
      correo: [null, [Validators.required, Validators.email]],
    });
  }

  submit(){
    const form = this.formulario.value
    console.log("Formulario: ", form)
    this.router.navigate(['datos'])
  }

}
