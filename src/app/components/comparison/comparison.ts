import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-comparison',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './comparison.html',
  styleUrl: './comparison.css'
})
export class ComparisonComponent {
  theme = inject(ThemeService);
  lang = inject(LanguageService);

  rows = [
    { key: 'AI_CONTRACT',      ez: true,  bonsai: false, honey: false, docu: false, wave: false },
    { key: 'PAYMENT_FOLLOWUP', ez: true,  bonsai: 'partial', honey: 'partial', docu: false, wave: false },
    { key: 'RISK_SCORE',       ez: true,  bonsai: false, honey: false, docu: false, wave: false },
    { key: 'RED_FLAG',         ez: true,  bonsai: false, honey: false, docu: false, wave: false },
    { key: 'DISPUTE',          ez: true,  bonsai: false, honey: false, docu: false, wave: false },
    { key: 'MILESTONE',        ez: true,  bonsai: true,  honey: true,  docu: false, wave: 'partial' },
    { key: 'MULTI_CURRENCY',   ez: true,  bonsai: true,  honey: true,  docu: true,  wave: true },
  ];

  prices = { ez: '$9', bonsai: '$25', honey: '$19', docu: '$15', wave: 'Free' };
  oneTime = { ez: true, bonsai: false, honey: false, docu: false, wave: false };
  instant = { ez: true, bonsai: false, honey: false, docu: true, wave: true };
}
