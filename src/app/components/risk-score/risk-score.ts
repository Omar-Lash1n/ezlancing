import { Component, inject, signal, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-risk-score',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './risk-score.html',
  styleUrl: './risk-score.css'
})
export class RiskScoreComponent implements AfterViewInit, OnDestroy {
  theme = inject(ThemeService);
  lang = inject(LanguageService);
  score = signal(0);
  targetScore = 42;
  private animationFrame: any;
  private observer!: IntersectionObserver;
  @ViewChild('riskSection') riskSection!: ElementRef;

  ngAfterViewInit() {
    if (typeof IntersectionObserver !== 'undefined' && this.riskSection) {
      this.observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.animateScore();
          this.observer.disconnect();
        }
      }, { threshold: 0.3 });
      this.observer.observe(this.riskSection.nativeElement);
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
  }

  private animateScore() {
    let current = 0;
    const step = () => {
      if (current < this.targetScore) {
        current += 1;
        this.score.set(current);
        this.animationFrame = requestAnimationFrame(step);
      }
    };
    step();
  }

  getScoreColor(): string {
    const s = this.score();
    if (s < 40) return '#EF4444';
    if (s < 70) return '#F59E0B';
    return '#06D6A0';
  }

  getStrokeDashoffset(): number {
    const circumference = 2 * Math.PI * 54;
    return circumference - (this.score() / 100) * circumference;
  }

  getCircumference(): number {
    return 2 * Math.PI * 54;
  }
}
