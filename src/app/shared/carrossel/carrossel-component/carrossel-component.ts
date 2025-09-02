import { Component, ContentChildren, AfterContentInit, QueryList, Input } from '@angular/core';
import { ItemCarrosel } from '../item-carrossel';

@Component({
  selector: 'app-carrossel-component',
  imports: [],
  templateUrl: './carrossel-component.html',
  styleUrl: './carrossel-component.scss'
})
export class CarrosselComponent implements AfterContentInit {
  @ContentChildren('itemCarrosel') conteudo!: QueryList<ItemCarrosel>;
  @Input() carrosselID: string = '';

  idsCarrosel: string[] = [];
  idAtual = 0;
  estaSelecionado = false;
  timerCarrossel: any;
  intervalo: number = 3000;

  ngAfterContentInit() {
    // Aqui você pode acessar o conteúdo projetado
    let auxiliar = 1;
    this.conteudo.forEach(divCard => {
      const idCard = this.carrosselID + auxiliar;
      divCard.setId(idCard);
      this.idsCarrosel.push(idCard);
      auxiliar++;
    });
    this.iniciarCarrossel();
  }

  iniciarCarrossel(): void {
    this.timerCarrossel = setInterval(() => this.movimentaCarrossel(1), this.intervalo);
  }

  movimentaCarrossel(posicoes: number): void {
    if (posicoes > 0) {
      this.idAtual = this.calculaProximoCard();
    } else {
      this.idAtual = this.calculaCardAnterior();
    }
    
    const container = document.getElementById(this.carrosselID);
    const targetElement = document.getElementById(this.idsCarrosel[this.idAtual]);
    if (container && targetElement) {
      // Calcula a posição do target em relação ao container
      const containerRect = container.getBoundingClientRect();
      const targetRect = targetElement.getBoundingClientRect();
      const scrollLeft = container.scrollLeft + (targetRect.right - containerRect.right);
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
    clearInterval(this.timerCarrossel);
    this.timerCarrossel = setInterval(() => this.movimentaCarrossel(1), this.intervalo);
  }

  calculaProximoCard(): number {
    let fimDaLista = false;
    let achouCardEmTela = false;
    let achouCardAposATela = false;
    let index = 0;
    let rectContainer = document.getElementById(this.carrosselID)!.getBoundingClientRect();

    do {
      const targetElement = document.getElementById(this.idsCarrosel[index]);
      if (targetElement) {
        const rect = targetElement!.getBoundingClientRect();
        if (rect.left >= 0 && rect.right <= rectContainer.right) {
          achouCardEmTela = true;
        }
        if (achouCardEmTela && rect.left + 10 > rectContainer.right) {
          achouCardAposATela = true;
          return index;
        }
      } else {
        fimDaLista = true;
      }
      index++;
    }
    while (!achouCardEmTela || (!achouCardAposATela && !fimDaLista));
    if (fimDaLista) {
      return 0;
    }
    // feito por segurança, mas não deve ser necessário
    return index;
  }

  calculaCardAnterior(): number {
    let achouCardEmTela = false;
    let achouCardAntesDaTela = false;
    let index = this.idsCarrosel.length - 1;
    let rectContainer = document.getElementById(this.carrosselID)!.getBoundingClientRect();

    do {
      const targetElement = document.getElementById(this.idsCarrosel[index]);
      if (targetElement) {
        const rect = targetElement!.getBoundingClientRect();
        if (rect.left >= 0 && rect.right <= rectContainer.right) {
          achouCardEmTela = true;
        }
        if (achouCardEmTela && rect.right - 10 < rectContainer.left) {
          achouCardAntesDaTela = true;
          return index; // +1 porque o index já foi decrementado
        }
      } else {
        index--;
      }
      index--;
    }
    while (!achouCardEmTela || (!achouCardAntesDaTela && index >= 0));
    if (index < 0) {
      return this.idsCarrosel.length - 1;
    }
    // feito por segurança, mas não deve ser necessário
    return index;
  }
}

