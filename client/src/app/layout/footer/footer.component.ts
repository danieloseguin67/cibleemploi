import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiService } from '../../core/ui.service';
import { LocaleService } from '../../core/locale.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private readonly uiService = inject(UiService);
  private readonly localeService = inject(LocaleService);

  readonly ui = this.uiService.ui;
  readonly locale = this.localeService.locale;
  readonly year = new Date().getFullYear();

  readonly socialLinks = [
    { label: 'LinkedIn', url: 'https://lu.linkedin.com/company/cible-retour-l%27emploi' },
    { label: 'Facebook', url: 'https://www.facebook.com/CibleRetourAlEmploi/' },
    { label: 'Twitter', url: 'https://twitter.com/andr_rousseau' }
  ];
}
