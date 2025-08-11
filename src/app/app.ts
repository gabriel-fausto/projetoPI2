import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header-component/header-component";
import { CarroselComponent } from "./components/carousel-component/carrosel-component";
import { ListaRoupasComponent } from "./pages/lista-roupas-component/lista-roupas-component";
import { FooterComponent } from "./shared/footer-component/footer-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CarroselComponent, ListaRoupasComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('projetoPI2');
}
