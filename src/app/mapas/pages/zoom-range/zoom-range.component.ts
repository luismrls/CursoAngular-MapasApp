import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as  mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
    .mapa-container {
      height: 100%;
      width: 100%; 
    }

    .row {
      background-color: white;
      border-radius: 5px;
      position: fixed;
      bottom: 50px;
      left: 50px;
      padding: 10px;
      z-index: 999;
      width:400px
    }
    ` 
  ]
})
export class ZoomRangeComponent implements AfterViewInit {

  mapa!: mapboxgl.Map;

  @ViewChild('mapa') divMapa!: ElementRef;

  zoomLevel: number = 10;

  constructor() { }

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ 7.911368174694034, 46.59012011926733 ],
      zoom: this.zoomLevel
    });

    this.mapa.on('zoom', (event) => {
      this.zoomLevel = this.mapa.getZoom()
    })
    
    this.mapa.on('zoomend', (event) => {
      if ( this.mapa.getZoom() > 18 ) {
        this.mapa.zoomTo(18);
      }
    })

  }

  zoomOut() {
    console.log('zoomOut')
    this.mapa.zoomOut()
  }
  
  zoomIn() {
    console.log('zoomIn')
    this.mapa.zoomIn()

  }

  zoomRange( valor: string ) {
    this.mapa.zoomTo( Number(valor) );
  }


}
