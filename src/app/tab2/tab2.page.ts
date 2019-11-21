import { Component } from '@angular/core';
import { Formulario } from 'src/models/Formulario'
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  private NombreUsuario: string ="";
  private Edad: string="";
  private Telefono: string="";
  private  Direccion: string="";
  private  email:string="";
  private  NoMascotas: number=null;
  private  Patio: boolean=false;
  private  Razon: string="";
  private  Alergias: string="";
  private  TiempoLibre: number=null;
  private  NombreMascota: string="";

  Formularios: Formulario[]= [];
  FormularioBorrador: Formulario;

  onSubmitRegister(){
    console.log(this.NombreUsuario, this.Edad,this.Telefono, this.Direccion, this.email, this.NoMascotas, this.Patio, this.Razon, this.Alergias, this.TiempoLibre, this.NombreMascota);
    
    this.FormularioBorrador=new Formulario();
    this.FormularioBorrador.NombreUsuario=this.NombreUsuario;
    this.FormularioBorrador.Edad=this.Edad;
    this.FormularioBorrador.Telefono=this.Telefono;
    this.FormularioBorrador.Direccion=this.Direccion;
    this.FormularioBorrador.email=this.email;
    this.FormularioBorrador.NoMascotas=this.NoMascotas;
    this.FormularioBorrador.Razon=this.Razon;
    this.FormularioBorrador.Patio=this.Patio;
    this.FormularioBorrador.Alergias=this.Alergias;
    this.FormularioBorrador.TiempoLibre=this.TiempoLibre;
    this.FormularioBorrador.NombreMascota=this.NombreMascota;

    this.Formularios.push(this.FormularioBorrador);
    console.log(this.Formularios);
  }
}
