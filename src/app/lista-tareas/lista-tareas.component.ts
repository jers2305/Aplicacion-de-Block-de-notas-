import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule
import { Tarea } from '../tarea.model';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule] // Añade RouterModule aquí
})
export class ListaTareasComponent implements OnInit {
  tareas: Tarea[] = [];
  filtro: string | null = null;

  constructor(private tareasService: TareasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.filtro = data['filter'];
      this.tareas = this.tareasService.getTareas().filter(tarea => this.filtro ? tarea.prioridad === this.filtro : true);
    });
  }

  eliminarTarea(id: number): void {
    this.tareasService.eliminarTarea(id);
    this.tareas = this.tareasService.getTareas().filter(tarea => this.filtro ? tarea.prioridad === this.filtro : true);
  }
}
