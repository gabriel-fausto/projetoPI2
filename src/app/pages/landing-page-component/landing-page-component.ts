import { Component } from '@angular/core';
import { CarroselImagemComponent } from "../../components/carrosel-imagem-component/carrosel-imagem-component";
import { CarroselCardRoupaComponent } from "../../components/carrosel-card-roupa-component/carrosel-card-roupa-component";

@Component({
  selector: 'app-landing-page-component',
  imports: [CarroselImagemComponent, CarroselCardRoupaComponent],
  templateUrl: './landing-page-component.html',
  styleUrl: './landing-page-component.scss'
})
export class LandingPageComponent {

}
