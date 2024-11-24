import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTareasComponent } from '../lista-tareas/lista-tareas.component'; // Asegúrate de importar ListaTareasComponent

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, ListaTareasComponent] // Añadir ListaTareasComponent aquí
})
export class HomeComponent { }
