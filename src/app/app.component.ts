import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; // Importa Router y NavigationEnd
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, // Importa RouterModule aquí
    HeaderComponent,
    FooterComponent
  ]
})
export class AppComponent implements OnInit {
  pageTitle: string = 'Inicio';

  constructor(private router: Router) { // Inyección de dependencia para Router
    this.router.events.subscribe((event: any) => { // Especificar el tipo de evento
      if (event instanceof NavigationEnd) {
        this.updatePageTitle(event.urlAfterRedirects);
      }
    });
  }

  ngOnInit() {
    const username = localStorage.getItem('username');
    if (!username) {
      this.router.navigate(['/login']);
    }
  }

  updatePageTitle(url: string): void {
    if (url.includes('alta')) {
      this.pageTitle = 'Alta Prioridad';
    } else if (url.includes('media')) {
      this.pageTitle = 'Media Prioridad';
    } else if (url.includes('baja')) {
      this.pageTitle = 'Baja Prioridad';
    } else if (url.includes('usuario')) {
      this.pageTitle = 'Usuario';
    } else {
      this.pageTitle = 'Inicio';
    }
  }
}
