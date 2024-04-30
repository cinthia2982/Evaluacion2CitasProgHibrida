import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private citas: { frase: string, autor: string }[] = [
    { frase: 'La vida es como una bicicleta. Para mantener el equilibrio, debes seguir adelante.', autor: 'Albert Einstein' },
    { frase: 'El único modo de hacer un gran trabajo es amar lo que haces.', autor: 'Steve Jobs' },
    { frase: 'No cuentes los días, haz que los días cuenten.', autor: 'Muhammad Ali' }
    // Agrega más citas según sea necesario...
  ];

  constructor() { }

  obtenerCitaAleatoria(): { frase: string, autor: string } {
    const indiceAleatorio = Math.floor(Math.random() * this.citas.length);
    return this.citas[indiceAleatorio];
  }
}
