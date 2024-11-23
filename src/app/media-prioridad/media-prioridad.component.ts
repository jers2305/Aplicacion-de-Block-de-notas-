import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { TareasService } from '../tareas.service';
import { Tarea } from '../tarea.model';

@Component({
  selector: 'app-media-prioridad',
  templateUrl: './media-prioridad.component.html',
  styleUrls: ['./media-prioridad.component.scss'],
  standalone: true,
  imports: [CommonModule, HeaderComponent]  // Importar CommonModule y HeaderComponent
})
export class MediaPrioridadComponent implements OnInit {
  tareas: Tarea[] = [];

  constructor(private tareasService: TareasService) {}

  ngOnInit(): void {
    this.tareas = this.tareasService.getTareas().filter(tarea => tarea.prioridad === 'media');
  }

  removeTarea(id: number): void {
    this.tareasService.removeTarea(id);
    this.tareas = this.tareasService.getTareas().filter(tarea => tarea.prioridad === 'media');
  }
}
