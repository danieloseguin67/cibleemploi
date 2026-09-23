import { Injectable, signal } from '@angular/core';
import type { Locale } from './models/content.models';

const SUPPORTED_LOCALES: Locale[] = ['fr', 'en'];
const DEFAULT_LOCALE: Locale = 'fr';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private readonly currentLocale = signal<Locale>(DEFAULT_LOCALE);
  readonly locale = this.currentLocale.asReadonly();

  isSupported(value: string | null | undefined): value is Locale {
    return SUPPORTED_LOCALES.includes(value as Locale);
  }

  setLocale(locale: Locale): void {
    this.currentLocale.set(locale);
  }

  get default(): Locale {
    return DEFAULT_LOCALE;
  }

  get all(): Locale[] {
    return SUPPORTED_LOCALES;
  }
}
