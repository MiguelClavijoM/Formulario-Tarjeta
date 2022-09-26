import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-financieros',
  templateUrl: './datos-financieros.component.html',
  styleUrls: ['./datos-financieros.component.scss'],
})
export class DatosFinancierosComponent implements OnInit {
  ngOnInit(): void {}

  formulario2: FormGroup;

  tiposDocumentos2 = ['Doctor/a', 'Ingeniero/a', 'Maestro/a', 'Otro'];
  tiposDocumentos3 = [
    'Contrato fijo',
    'Contrato indefinido',
    'Por prestación de servicios',
    'Por obra o labor',
  ];

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) {
    this.formulario2 = this.formBuilder.group({
      ingresosMensuales: [null, [Validators.required]],
      gastosMensuales: [null, [Validators.required]],
      ocupacion: [null],
      tipoContrato: [null, [Validators.required]],
    });
  }

  submit() {
    //this.router.navigate(['resultados'],{queryParams: {mensaje:"Estes es mi mensaje"}})
    const data = this.formulario2.value;
    let tipoContrato;
    if (
      data.tipoContrato == 'Contrato fijo' ||
      data.tipoContrato == 'Contrato indefinido'
    ) {
      tipoContrato = 1;
    } else if (data.tipoContrato == 'Por prestación de servicios') {
      tipoContrato = 0.8;
    } else if (data.tipoContrato == 'Por obra o labor') {
      tipoContrato = 0.6;
    }

    this.http.post("http://localhost:3000/datos-financieros",{
      tipoContrato,
      ingresosMensuales: data.ingresosMensuales,
      gastosMensuales: data.gastosMensuales
    }).subscribe((response:any) => {
      console.log("Esta es la respuesta del servidor:",response)
      if(response.respuesta === "Aprobado"){
        this.router.navigate(['resultados'],{queryParams: {mensaje:"Enviaremos información importante para continuar con tu solicitud.", titulo: "¡Tarjeta fue aprobada!"}})
      }else{
        this.router.navigate(['resultados'],{queryParams: {mensaje:"Lo sentimos tu tarjeta no fue aprobada.", titulo: "Tarjeta no aprobada"}})

      }
    })




  }
}
