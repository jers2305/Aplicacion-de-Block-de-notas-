import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddTareaComponent } from './add-tarea/add-tarea.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { UsuarioComponent } from './usuario/usuario.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'alta', component: ListaTareasComponent, data: { filter: 'alta' } },
  { path: 'media', component: ListaTareasComponent, data: { filter: 'media' } },
  { path: 'baja', component: ListaTareasComponent, data: { filter: 'baja' } },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'nueva-nota', component: AddTareaComponent },
  { path: '**', redirectTo: '' }
];
