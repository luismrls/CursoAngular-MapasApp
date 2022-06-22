import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as  mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [`
    
    .mapa-container {
      height: 100%;
      width: 100%; 
    }

    .list-group {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 99;
    }
    
    li {
      cursor: pointer;
    }
  `]
})
export class MarcadoresComponent implements AfterViewInit {
  
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [ 7.911368174694034, 46.59012011926733 ];

  constructor() { }

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center:this.center,
      zoom: this.zoomLevel
    });

    // ============ Forma de colocar un texto personalizado en vez del marcador ==========
    // const markerHtml: HTMLElement = document.createElement('div');
    // markerHtml.innerHTML = 'Hola Mundo Soy YO!!'

    // const maker = new mapboxgl.Marker({
    //   element: markerHtml
    // })
    //   .setLngLat( this.center )
    //   .addTo(this.mapa);

    

  }

  agregarMarcador() {

    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    
    const marker = new mapboxgl.Marker({
      draggable: true,
      color
    })
    .setLngLat( this.center )
    .addTo(this.mapa);
  }

  irMarcador() {
    
  }

}
