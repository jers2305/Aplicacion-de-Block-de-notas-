import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddTareaComponent } from './add-tarea/add-tarea.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component'; // Importar el componente Login
import { DetalleTareaComponent } from './detalle-tarea/detalle-tarea.component'; // Importar el componente DetalleTarea

export const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Ruta de login como primera vista
  { path: '', redirectTo: '/lista-tareas', pathMatch: 'full' }, // Redireccionar a la lista de tareas como vista por defecto
  { path: 'lista-tareas', component: ListaTareasComponent }, // Componente Lista de Tareas
  { path: 'detalle-tarea/:id', component: DetalleTareaComponent }, // Componente Detalle de Tarea
  { path: 'alta', component: ListaTareasComponent, data: { filter: 'alta' } },
  { path: 'media', component: ListaTareasComponent, data: { filter: 'media' } },
  { path: 'baja', component: ListaTareasComponent, data: { filter: 'baja' } },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'nueva-nota', component: AddTareaComponent },
  { path: '**', redirectTo: '/lista-tareas' }
];
