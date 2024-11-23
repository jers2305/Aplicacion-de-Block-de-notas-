export interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string;
  prioridad: 'alta' | 'media' | 'baja';
}
