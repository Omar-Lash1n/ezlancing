import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class FaqComponent {
  theme = inject(ThemeService);
  lang = inject(LanguageService);
  openIndex = signal<number | null>(null);

  faqs = ['1', '2', '3', '4', '5', '6'];

  toggle(i: number) {
    this.openIndex.update(v => v === i ? null : i);
  }
}
