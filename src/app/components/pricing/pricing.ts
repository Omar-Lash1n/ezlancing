import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css'
})
export class PricingComponent {
  theme = inject(ThemeService);
  lang = inject(LanguageService);
  isAnnual = signal(true);
}
