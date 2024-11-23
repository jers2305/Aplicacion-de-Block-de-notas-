import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { TareasService } from '../tareas.service';
import { Tarea } from '../tarea.model';

@Component({
  selector: 'app-baja-prioridad',
  templateUrl: './baja-prioridad.component.html',
  styleUrls: ['./baja-prioridad.component.scss'],
  standalone: true,
  imports: [CommonModule, HeaderComponent]  // Importar CommonModule y HeaderComponent
})
export class BajaPrioridadComponent implements OnInit {
  tareas: Tarea[] = [];

  constructor(private tareasService: TareasService) {}

  ngOnInit(): void {
    this.tareas = this.tareasService.getTareas().filter(tarea => tarea.prioridad === 'baja');
  }

  removeTarea(id: number): void {
    this.tareasService.removeTarea(id);
    this.tareas = this.tareasService.getTareas().filter(tarea => tarea.prioridad === 'baja');
  }
}
