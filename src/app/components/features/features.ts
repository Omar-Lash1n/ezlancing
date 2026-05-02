import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './features.html',
  styleUrl: './features.css'
})
export class FeaturesComponent {
  theme = inject(ThemeService);
  lang = inject(LanguageService);

  features = [
    { key: 'F1', icon: 'contract', gradient: 'from-violet-500 to-purple-600' },
    { key: 'F2', icon: 'tracking', gradient: 'from-blue-500 to-cyan-500' },
    { key: 'F3', icon: 'risk', gradient: 'from-amber-500 to-orange-500' },
    { key: 'F4', icon: 'flag', gradient: 'from-red-500 to-pink-500' },
    { key: 'F5', icon: 'milestone', gradient: 'from-emerald-500 to-teal-500' },
    { key: 'F6', icon: 'dispute', gradient: 'from-indigo-500 to-blue-600' }
  ];
}
