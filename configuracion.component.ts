import { Component } from '@angular/core';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent {
  borrarCitasInicio: boolean = false; // Variable para almacenar la opción de borrar citas al inicio

  constructor() { }

  guardarConfiguracion() {
    console.log('Configuración guardada:', this.borrarCitasInicio);
  }
}
