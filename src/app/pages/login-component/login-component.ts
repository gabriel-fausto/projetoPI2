import { Component, signal } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule, MatInputModule, MatIconModule, MatFormFieldModule, ReactiveFormsModule, MatButtonModule, MatButtonModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss'
})
export class LoginComponent {
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly senha = new FormControl('', [Validators.required]);
  errorMessage = signal('');
  hideSenha: boolean = true;

  hide() {
    return this.hideSenha;
  }

  onBotaoClicado() {
    
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('Campo obrigatório');
    } 
    else if (this.email.hasError('email')) {
      this.errorMessage.set('Email invalido');
    } 
    else {
      this.errorMessage.set('');
    }

    if (this.senha.hasError('required')) {
      this.errorMessage.set('Campo obrigatório');
    } 
    else {
      this.errorMessage.set('');
    }
  }
}
