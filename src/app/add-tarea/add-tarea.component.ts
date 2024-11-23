import { Component } from '@angular/core';
import { TareasService } from '../tareas.service';
import { Tarea } from '../tarea.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-tarea',
  templateUrl: './add-tarea.component.html',
  styleUrls: ['./add-tarea.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AddTareaComponent {
  nuevaTarea: Tarea = { id: 0, titulo: '', descripcion: '', fecha: '', prioridad: 'baja' };

  constructor(private tareasService: TareasService) { }

  agregarTarea(): void {
    this.tareasService.addTarea(this.nuevaTarea);
    this.nuevaTarea = { id: 0, titulo: '', descripcion: '', fecha: '', prioridad: 'baja' }; // Reinicia el formulario
  }
}
