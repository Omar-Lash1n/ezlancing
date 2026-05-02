import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { SocialProofComponent } from './components/social-proof/social-proof';
import { FeaturesComponent } from './components/features/features';
import { HowItWorksComponent } from './components/how-it-works/how-it-works';
import { RiskScoreComponent } from './components/risk-score/risk-score';
import { ComparisonComponent } from './components/comparison/comparison';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { PricingComponent } from './components/pricing/pricing';
import { FaqComponent } from './components/faq/faq';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    SocialProofComponent,
    FeaturesComponent,
    HowItWorksComponent,
    RiskScoreComponent,
    ComparisonComponent,
    TestimonialsComponent,
    PricingComponent,
    FaqComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
