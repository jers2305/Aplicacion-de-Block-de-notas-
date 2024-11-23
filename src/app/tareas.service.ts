import { Injectable } from '@angular/core';
import { Tarea } from './tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private tareas: Tarea[] = [
    { id: 1, titulo: 'Tarea 1', descripcion: 'Descripción 1', fecha: '2023-11-22', prioridad: 'alta' },
    { id: 2, titulo: 'Tarea 2', descripcion: 'Descripción 2', fecha: '2023-11-23', prioridad: 'media' },
    { id: 3, titulo: 'Tarea 3', descripcion: 'Descripción 3', fecha: '2023-11-24', prioridad: 'baja' }
  ];

  private currentId: number = 3;

  constructor() { }

  getTareas(): Tarea[] {
    return this.tareas;
  }

  eliminarTarea(id: number): void {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }

  addTarea(tarea: Tarea): void {
    this.currentId++;
    tarea.id = this.currentId;
    this.tareas.push(tarea);
  }
}
