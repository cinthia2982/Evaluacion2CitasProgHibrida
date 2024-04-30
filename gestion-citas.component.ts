import { Component } from '@angular/core';
import { CitasService } from '../services/citas.service';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.component.html',
  styleUrls: ['./gestion-citas.component.css']
})
export class GestionCitasComponent {
  nuevaCita: { frase: string, autor: string } = { frase: '', autor: '' };
  citas: { frase: string, autor: string }[] = [];

  constructor(private citasService: CitasService) { }

  ngOnInit() {
    this.cargarCitas();
  }

  cargarCitas() {
    this.citas = this.citasService.obtenerCitas();
  }

  agregarCita() {
    if (this.nuevaCita.frase && this.nuevaCita.autor) {
      this.citasService.agregarCita(this.nuevaCita);
      this.nuevaCita = { frase: '', autor: '' };
      this.cargarCitas(); // Actualizar la lista de citas
    }
  }

  eliminarCita(cita: { frase: string, autor: string }) {
    this.citasService.eliminarCita(cita);
    this.cargarCitas(); // Actualizar la lista de citas
  }
}

