import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  standalone: true,
  imports: [CommonModule, HeaderComponent]  // Importar CommonModule y HeaderComponent
})
export class UsuarioComponent { }
