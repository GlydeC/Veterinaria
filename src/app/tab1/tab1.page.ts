import { Component } from '@angular/core';
import { Animal } from 'src/models/Animales';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  audio = new Audio();
  tiempoAudio: any;

  Animales:Animal[] = [
    
   { 
    Nombre : "Perro",
    Audio : "assets/PERRO.mp3",
    Imagen : "assets/PERRO.png",
    Especie : "Canino",
    Alimentacion : "Croquetas",
    Ecosistema : "Domestico",
    Peso : "Ligero",
    Genero : "Macho",
    Raza : "Mr.X",

    Card_Color: "primary",

    Duracion: 0.04,
    Reproduciendo: false
  },

  {
    Nombre : "Tigre",
    Audio : "assets/TIGRE.mp3",
    Imagen : "assets/TIGRE.png",
    Especie : "Felino",
    Alimentacion : "Humanos",
    Ecosistema : "Jungla",
    Peso : "Medio",
    Genero : "Macho",
    Raza : "Dientes de Espada (?)",

    Card_Color: "primary",

    Duracion: 0.04,
    Reproduciendo: false
  },

  {
    Nombre : "Sapo",
    Audio : "assets/SAPO.mp3",
    Imagen : "assets/SAPO.png",
    Especie : "Bufonidae",
    Alimentacion : "Insectos",
    Ecosistema : "Pantanos",
    Peso : "Pluma",
    Genero : "Macho",
    Raza : "Principe Encantador",

    Card_Color: "primary",

    Duracion: 0.10,
    Reproduciendo: false
  }
  ];

  onTouchFunction(animal: Animal){
    console.log("Click recibido Enrique Andrés");
    if(animal.Card_Color=="primary"){
      animal.Card_Color = "secondary";
    }else{
      animal.Card_Color = "primary";
    }
    console.log();  //Probar evento
    //HTML 5 es para el audio
    
    let audio = new Audio();
 
     audio.src = animal.Audio;
     animal.Reproduciendo = true;
     audio.load();
     audio.play();
 
     this.tiempoAudio = setTimeout(() => {
       animal.Reproduciendo = false;
     }, animal.Duracion * 1000);

    /*alert('Tu '+ animal.Nombre+' favorito funciona');*/
    console.log(animal);
  }
}
