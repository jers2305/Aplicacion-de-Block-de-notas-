import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  standalone: true,
  imports: [CommonModule] // Asegúrate de importar CommonModule aquí
})
export class UsuarioComponent implements OnInit {
  username: string | null = '';

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }
}
