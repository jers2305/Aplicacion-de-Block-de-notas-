import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { TareasService } from '../tareas.service';
import { Tarea } from '../tarea.model';

@Component({
  selector: 'app-alta-prioridad',
  templateUrl: './alta-prioridad.component.html',
  styleUrls: ['./alta-prioridad.component.scss'],
  standalone: true,
  imports: [CommonModule, HeaderComponent]  // Importar CommonModule y HeaderComponent
})
export class AltaPrioridadComponent implements OnInit {
  tareas: Tarea[] = [];

  constructor(private tareasService: TareasService) {}

  ngOnInit(): void {
    this.tareas = this.tareasService.getTareas().filter(tarea => tarea.prioridad === 'alta');
  }

  removeTarea(id: number): void {
    this.tareasService.removeTarea(id);
    this.tareas = this.tareasService.getTareas().filter(tarea => tarea.prioridad === 'alta');
  }
}

