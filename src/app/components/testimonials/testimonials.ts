import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class TestimonialsComponent {
  theme = inject(ThemeService);
  lang = inject(LanguageService);
  activeIndex = signal(0);

  testimonials = [
    { key: 'T1', initials: 'SC', gradient: 'from-violet-500 to-purple-600' },
    { key: 'T2', initials: 'MW', gradient: 'from-blue-500 to-cyan-500' },
    { key: 'T3', initials: 'FA', gradient: 'from-emerald-500 to-teal-500' },
    { key: 'T4', initials: 'AM', gradient: 'from-amber-500 to-orange-500' },
  ];

  setActive(i: number) {
    this.activeIndex.set(i);
  }

  next() {
    this.activeIndex.update(v => (v + 1) % this.testimonials.length);
  }

  prev() {
    this.activeIndex.update(v => (v - 1 + this.testimonials.length) % this.testimonials.length);
  }
}
