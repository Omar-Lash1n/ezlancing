import { Component, inject, OnInit, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements OnInit {
  theme = inject(ThemeService);
  lang = inject(LanguageService);
  loaded = signal(false);

  ngOnInit() {
    setTimeout(() => this.loaded.set(true), 100);
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
