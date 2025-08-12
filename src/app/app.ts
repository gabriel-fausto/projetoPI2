import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header-component/header-component";
import { FooterComponent } from "./shared/footer-component/footer-component";
import { LandingPageComponent } from "./pages/landing-page-component/landing-page-component";
import { LoginComponent } from "./pages/login-component/login-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, LandingPageComponent, LoginComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('projetoPI2');
}
