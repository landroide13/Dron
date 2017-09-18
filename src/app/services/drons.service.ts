
import { Injectable } from '@angular/core';

@Injectable()
export class DronsService {


  private drons:Dron[] = [

    {
      name: "Dron1",
      bio: "Mambo FPV, fly your minidrone in an innovative way with first-person view. The FPV camera and the Parrot Cockpitglasses 2 will plunge you into an unprecedented immersive experience. Get ready to become a genuine FPV racing pilot.",
      img: "assets/img/dron1.jpeg",
      aparicion: "1941-11-01",
      price:"USD 200"
    },
    {
      name: "Dron2",
      bio: "Mambo FPV, fly your minidrone in an innovative way with first-person view. The FPV camera and the Parrot Cockpitglasses 2 will plunge you into an unprecedented immersive experience. Get ready to become a genuine FPV racing pilot.",
      img: "assets/img/dron2.jpeg",
      aparicion: "1939-05-01",
      price:"USD 200"
    },
    {
      name: "Dron3",
      bio: "Mambo FPV, fly your minidrone in an innovative way with first-person view. The FPV camera and the Parrot Cockpitglasses 2 will plunge you into an unprecedented immersive experience. Get ready to become a genuine FPV racing pilot.",
      img: "assets/img/dron3.jpeg",
      aparicion: "1964-01-01",
      price: "USD 200"
    },
    {
      name: "Dron4",
      bio: "Mambo FPV, fly your minidrone in an innovative way with first-person view. The FPV camera and the Parrot Cockpitglasses 2 will plunge you into an unprecedented immersive experience. Get ready to become a genuine FPV racing pilot.",
      img: "assets/img/dron4.jpeg",
      aparicion: "1962-05-01",
      price:"USD 200"
    },
    {
      name: "Dron5",
      bio: "Mambo FPV, fly your minidrone in an innovative way with first-person view. The FPV camera and the Parrot Cockpitglasses 2 will plunge you into an unprecedented immersive experience. Get ready to become a genuine FPV racing pilot.",
      img: "assets/img/dron5.jpeg",
      aparicion: "1940-06-01",
      price: "USD 200"
    },
    {
      name: "Dron6",
      bio: "Mambo FPV, fly your minidrone in an innovative way with first-person view. The FPV camera and the Parrot Cockpitglasses 2 will plunge you into an unprecedented immersive experience. Get ready to become a genuine FPV racing pilot.",
      img: "assets/img/dron6.jpeg",
      aparicion: "1962-08-01",
      price: "USD 200"
    },
    {
      name: "Dron7",
      bio: "Mambo FPV, fly your minidrone in an innovative way with first-person view. The FPV camera and the Parrot Cockpitglasses 2 will plunge you into an unprecedented immersive experience. Get ready to become a genuine FPV racing pilot.",
      img: "assets/img/dronG7.jpeg",
      aparicion: "1974-11-01",
      price: "USD 200"
    }
  ];

  constructor() {
    console.log("Service ready..")
    }

    getDrons(){
      return this.drons;
    }

    getDron(idx:number){
      return this.drons[idx];
    }

    lookDron(term:string):Dron[]{
      let arrDron:Dron[] = [];
      term = term.toLowerCase();

      for(let dron of this.drons ){
        let name = dron.name.toLowerCase()
        if(name.indexOf(term) >= 0){
          arrDron.push(dron);
        }
      }
      return arrDron;
    }

}

export interface Dron{
  name: string;
  bio: string;
  aparicion: string;
  img: string;
  price: string;
}
