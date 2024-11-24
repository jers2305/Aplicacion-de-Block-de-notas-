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

  private currentId: number = 3; // Mantener un contador de ID único

  constructor() { }

  getTareas(): Tarea[] {
    return this.tareas;
  }

  getTareaById(id: number): Tarea | undefined {
    return this.tareas.find(tarea => tarea.id === id);
  }

  eliminarTarea(id: number): void {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }

  addTarea(tarea: Tarea): void {
    this.currentId++; // Incrementar el ID único
    tarea.id = this.currentId;
    this.tareas.push(tarea);
  }
}
