import { Component } from "@angular/core";
export interface TimelineElement {
  tituloPrincipal: string;
  date: Date;
  titulo: string;
  selected?: boolean;
  contenido: string;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular 6";
  content = `Tabla`;

  constructor() {
    this.load();
  }

  timeline: TimelineElement[] = [];

  load() {
    this.timeline = [];

    this.timeline = [
      {
        tituloPrincipal: "10",
        date: new Date(2014, 1, 16),
        titulo: "Grafica X",
        contenido: this.content
      },
      {
        tituloPrincipal: "28 Feb",
        date: new Date(2014, 2, 28),
        titulo: "Grafica X",
        contenido: this.content
      },
      {
        tituloPrincipal: "20 Mar",
        date: new Date(2014, 3, 20),
        selected: true,
        titulo: "Grafica X",
        contenido: this.content
      },
      {
        tituloPrincipal: "20 May",
        date: new Date(2014, 5, 20),
        titulo: "Grafica X",
        contenido: this.content
      },
      {
        tituloPrincipal: "09 Jul",
        date: new Date(2014, 7, 9),
        titulo: "Grafica X",
        contenido: this.content
      },
      {
        tituloPrincipal: "30 Aug",
        date: new Date(2014, 8, 30),
        titulo: "Grafica X",
        contenido: this.content
      },
      {
        tituloPrincipal: "15 Sep",
        date: new Date(2014, 9, 15),
        titulo: "Grafica X",
        contenido: this.content
      },
      {
        tituloPrincipal: "01 Nov",
        date: new Date(2014, 11, 1),
        titulo: "Grafica X",
        contenido: this.content
      },
      {
        tituloPrincipal: "10 Dec",
        date: new Date(2014, 12, 10),
        titulo: "Grafica X",
        contenido: this.content
      },
      {
        tituloPrincipal: "29 Jan",
        date: new Date(2015, 1, 19),
        titulo: "Grafica X",
        contenido: this.content
      },
      {
        tituloPrincipal: "3 Mar",
        date: new Date(2015, 3, 3),
        titulo: "Grafica X",
        contenido: this.content
      }
    ];
  }
}
