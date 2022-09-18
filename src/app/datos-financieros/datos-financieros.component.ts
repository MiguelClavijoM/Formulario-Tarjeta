import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-financieros',
  templateUrl: './datos-financieros.component.html',
  styleUrls: ['./datos-financieros.component.scss']
})

export class DatosFinancierosComponent implements OnInit{
  ngOnInit(): void {
  }

  formulario2: FormGroup;

  tiposDocumentos2 = ['Doctor/a', 'Ingeniero/a', 'Maestro/a', 'Otro' ]
  tiposDocumentos3 = ['Contrato fijo', 'Contrato indefinido', 'Por prestación de servicios', 'Por obra o labor']

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formulario2 = this.formBuilder.group({
      ingresosMensuales: [null, [Validators.required]],
      gastosMensuales: [null,[Validators.required]],
      ocupacion: [null],
      tipoContrato: [null,[Validators.required]]
    });
}


submit(){
  this.router.navigate(['resultados'],{queryParams: {mensaje:"Estes es mi mensaje"}})
  const data = this.formulario2.value 
  let K;
  if (data.tipoContrato=='Contrato fijo' || data.tipoContrato == 'Contrato indefinido'){
    K = 1; 
  }
  else if (data.tipoContrato == 'Por prestación de servicios'){
    K = 0.8;
  }
  else (data.tipoContrato == 'Por obra o labor')
  K = 0.6;
}



}
