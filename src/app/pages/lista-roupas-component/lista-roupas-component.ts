import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GridRoupasComponent } from "../../components/grid-roupas-component/grid-roupas-component";

@Component({
  selector: 'app-lista-roupas-component',
  imports: [
    MatSidenavModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    GridRoupasComponent
  ],
  templateUrl: './lista-roupas-component.html',
  styleUrl: './lista-roupas-component.scss'
})
export class ListaRoupasComponent {
  ordenacao: any = [
    { value: 'precoBaixo', viewValue: 'Preço baixo' },
    { value: 'precoAlto', viewValue: 'Preço alto' },
    { value: 'maisVendidos', viewValue: 'Mais vendidos' },
    { value: 'favoritos', viewValue: 'Favoritos' },
  ];
  ordenacaoSelecionada = '';
}
