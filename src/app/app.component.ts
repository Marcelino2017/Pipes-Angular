import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  nombre    : string   = 'Capitan America';
  nombre2    : string  = 'marCeliNo mEjIa';
  personajes: string[] = ['Iroman','Spiderman', 'Thor', 'Loki', 'Groot'];
  PI        :number  = Math.PI;
  porcentaje:number  = 0.235;
  salario   :number  = 1234.5;
  fecha     :Date    = new Date();
  activar   :boolean = true;

  idioma    :string = 'es';
  videoUrl  :string = 'https://www.youtube.com/embed/w0YxU2gVNXI'; 

  valorPromesa = new Promise<string>((resolve) =>{
    setTimeout(() => {
      resolve('Llego la data')
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Worlverine',
    edad: 500,
    direccion: {
      caller: 'Primera',
      casa: 20
    }
  } 
}
