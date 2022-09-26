import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss'],
})
export class ResultadoComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  titulo = "";
  mensaje = "";
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      console.log(params);
      this.titulo = params.titulo;
      this.mensaje = params.mensaje;
    });
  }
}
