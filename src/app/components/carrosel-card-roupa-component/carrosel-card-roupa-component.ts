import { Component, Input } from '@angular/core';
import { CardRoupaComponent } from "../card-roupa-component/card-roupa-component";
import { CarrosselComponent } from "../../shared/carrossel/carrossel-component/carrossel-component";
import { CardCarrosselComponent } from '../../shared/carrossel/card-carrossel-component/card-carrossel-component';

@Component({
  selector: 'app-carrosel-card-roupa-component',
  imports: [ CardRoupaComponent, CarrosselComponent, CardCarrosselComponent],
  templateUrl: './carrosel-card-roupa-component.html',
  styleUrl: './carrosel-card-roupa-component.scss'
})
export class CarroselCardRoupaComponent {
  @Input() identificador: string = '';
}
