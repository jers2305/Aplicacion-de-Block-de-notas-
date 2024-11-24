import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router'; // Importar Router
import { RouterModule } from '@angular/router'; // Importar RouterModule
import { Tarea } from '../tarea.model';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule] // Asegúrate de importar RouterModule aquí
})
export class ListaTareasComponent implements OnInit {
  tareas: Tarea[] = [];
  filtro: string | null = null;

  constructor(private tareasService: TareasService, private route: ActivatedRoute, private router: Router) { } // Añadir Router

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

  verDetalle(id: number): void {
    this.router.navigate(['/detalle-tarea', id]);
  }
}
