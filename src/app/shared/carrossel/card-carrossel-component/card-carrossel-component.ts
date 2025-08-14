import { Component } from '@angular/core';
import { ItemCarrosel } from '../item-carrossel';

@Component({
  selector: 'app-card-carrossel-component',
  imports: [],
  templateUrl: './card-carrossel-component.html',
  styleUrl: './card-carrossel-component.scss'
})
export class CardCarrosselComponent implements ItemCarrosel {
  id!: string;

  setId(id: string): void {
    this.id = id;
  }

}
