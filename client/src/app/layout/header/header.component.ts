import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs';
import { UiService } from '../../core/ui.service';
import { LocaleService } from '../../core/locale.service';
import { LocalePathPipe } from '../../core/pipes/locale-path.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LocalePathPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private readonly uiService = inject(UiService);
  private readonly localeService = inject(LocaleService);
  private readonly router = inject(Router);

  readonly ui = this.uiService.ui;
  readonly locale = this.localeService.locale;
  readonly otherLocale = computed(() => (this.locale() === 'fr' ? 'en' : 'fr'));

  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
      startWith(this.router.url)
    ),
    { initialValue: this.router.url }
  );

  readonly otherLocaleLink = computed(() => {
    const segments = this.currentUrl().split('/').filter(Boolean);
    const rest = segments.slice(1).join('/');
    return `/${this.otherLocale()}${rest ? '/' + rest : ''}`;
  });

  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
