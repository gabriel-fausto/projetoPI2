import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardRoupaComponent } from '../card-roupa-component/card-roupa-component';

@Component({
  selector: 'app-grid-roupas-component',
  imports: [MatGridListModule, CardRoupaComponent],
  templateUrl: './grid-roupas-component.html',
  styleUrl: './grid-roupas-component.scss'
})
export class GridRoupasComponent {

}
