import { Component } from '@angular/core';
import { MenuItem } from '../interfaces/menu.inteface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class MenuComponent {

  menuItems: MenuItem[] = [
    { ruta: '/mapas/fullscreen', nombre: 'Fullscreen' },
    { ruta: '/mapas/zoom-range', nombre: 'Zoom range' },
    { ruta: '/mapas/marcadores', nombre: 'Marcadores' },
    { ruta: '/mapas/propiedades', nombre: 'Propiedades' },
  ]

}
