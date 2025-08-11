import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carrosel-component',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './carrosel-component.html',
  styleUrl: './carrosel-component.scss'
})
export class CarroselComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1500,
    autoHeight: true,
    autoplay: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 10000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
}
