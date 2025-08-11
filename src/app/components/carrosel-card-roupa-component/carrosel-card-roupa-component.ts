import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CardRoupaComponent } from "../card-roupa-component/card-roupa-component";

@Component({
  selector: 'app-carrosel-card-roupa-component',
  imports: [CarouselModule, CardRoupaComponent],
  templateUrl: './carrosel-card-roupa-component.html',
  styleUrl: './carrosel-card-roupa-component.scss'
})
export class CarroselCardRoupaComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoHeight: true,
    autoplay: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    }
  }
}
