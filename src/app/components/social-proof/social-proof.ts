import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-social-proof',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './social-proof.html',
  styleUrl: './social-proof.css'
})
export class SocialProofComponent {
  theme = inject(ThemeService);
  lang = inject(LanguageService);
}
