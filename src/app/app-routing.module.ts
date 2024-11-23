import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddTareaComponent } from './add-tarea/add-tarea.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: AddTareaComponent },
  { path: 'list', component: ListaTareasComponent },
  { path: '**', redirectTo: '' }
];
