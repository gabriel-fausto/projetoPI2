import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-roupa-component',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './card-roupa-component.html',
  styleUrl: './card-roupa-component.scss'
})
export class CardRoupaComponent {

}
