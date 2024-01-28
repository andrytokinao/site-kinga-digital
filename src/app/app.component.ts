import {Component, HostListener, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./shared/header/header.component";
import Typed from 'typed.js';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'site-kinga-digital';
  isSticky: boolean = false;

  constructor() { }

  // Ecouteur d'événement pour le défilement de la fenêtre
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    // Logique pour détecter le défilement et appliquer des styles en conséquence
    if (window.pageYOffset > 58) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }

  // Fonction pour faire défiler en douceur vers une section spécifique
  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}
