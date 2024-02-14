import { Component } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
rutaTabla:any;
element:any;
element2:any;
element3:any;
element4:any;
stateLED1:boolean=false;
stateLED2:boolean=false;
stateLED3:boolean=false;
stateLED4:boolean=false;
  constructor(private db:Firestore) {}



async toogleState() {
  this.stateLED1=!this.stateLED1;
  this.rutaTabla = doc(this.db,'controlLED','LED1');//RUTA DE TABLA EN LA BD
  await setDoc(this.rutaTabla, { encender: this.stateLED1 });//CAMBIA EL ATRIBUTO DE LA TABLA
  this.element = document.getElementById('LED1');
  console.log(this.element);
   if (this.element!== null && this.stateLED1!=false) {
     this.element.style.boxShadow = '0 0 20px rgb(68, 196, 255)';
 } else {
   this.element.style.boxShadow = 'none';
 }
}

async toogleState2() {
  this.stateLED2=!this.stateLED2;
  this.rutaTabla = doc(this.db,'controlLED','LED2');//RUTA DE TABLA EN LA BD
  await setDoc(this.rutaTabla, { encender: this.stateLED2 });//CAMBIA EL ATRIBUTO DE LA TABLA
 this.element2 = document.getElementById('LED2');
 console.log(this.element2);
  if (this.element2 !== null && this.stateLED2!=false) {
    this.element2.style.boxShadow = '0 0 20px rgb(68, 196, 255)';
} else {
  this.element2.style.boxShadow = 'none';
}
 
}

async toogleState3() {
  this.stateLED3=!this.stateLED3;
  this.rutaTabla = doc(this.db,'controlLED','LED3');//RUTA DE TABLA EN LA BD
  await setDoc(this.rutaTabla, { encender: this.stateLED3 });//CAMBIA EL ATRIBUTO DE LA TABLA
  this.element3 = document.getElementById('LED3');
  console.log(this.element3);
   if (this.element3 !== null && this.stateLED3!=false) {
     this.element3.style.boxShadow = '0 0 20px rgb(68, 196, 255)';
 } else {
   this.element3.style.boxShadow = 'none';
 }
}

async toogleState4() {
  this.stateLED4=!this.stateLED4;
  this.rutaTabla = doc(this.db,'controlLED','LED3');//RUTA DE TABLA EN LA BD
  await setDoc(this.rutaTabla, { encender: this.stateLED4 });//CAMBIA EL ATRIBUTO DE LA TABLA
  
  
  this.rutaTabla = doc(this.db,'controlLED','LED2');//RUTA DE TABLA EN LA BD
  await setDoc(this.rutaTabla, { encender: this.stateLED4 });//CAMBIA EL ATRIBUTO DE LA TABLA

  this.rutaTabla = doc(this.db,'controlLED','LED1');//RUTA DE TABLA EN LA BD
  await setDoc(this.rutaTabla, { encender: this.stateLED4 });//CAMBIA EL ATRIBUTO DE LA TABLA

  this.element4 = document.getElementById('LED4');
  console.log(this.element4);
   if (this.element4 !== null && this.stateLED4!=false) {
     this.element4.style.boxShadow = '0 0 20px rgb(68, 196, 255)';
 } else {
   this.element4.style.boxShadow = 'none';
 }


 this.element3 = document.getElementById('LED3');
 console.log(this.element3);
  if (this.element4 !== null && this.stateLED4!=false) {
    this.element3.style.boxShadow = '0 0 20px rgb(68, 196, 255)';
} else {
  this.element3.style.boxShadow = 'none';
}


this.element2 = document.getElementById('LED2');
 console.log(this.element2);
  if (this.element4 !== null && this.stateLED4!=false) {
    this.element2.style.boxShadow = '0 0 20px rgb(68, 196, 255)';
} else {
  this.element2.style.boxShadow = 'none';
}

this.element = document.getElementById('LED1');
  console.log(this.element);
   if (this.element4!== null && this.stateLED4!=false) {
     this.element.style.boxShadow = '0 0 20px rgb(68, 196, 255)';
 } else {
   this.element.style.boxShadow = 'none';
 }

}

}
