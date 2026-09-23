import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable, catchError, of, shareReplay, switchMap } from 'rxjs';
import type { Locale } from './models/content.models';
import { LocaleService } from './locale.service';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private readonly http = inject(HttpClient);
  private readonly localeService = inject(LocaleService);
  private readonly cache = new Map<string, Observable<unknown>>();
  private readonly locale$ = toObservable(this.localeService.locale);

  /** Loads assets/content/<locale>/<slug>.json, falling back to the default locale if missing. */
  get<T>(slug: string, locale: Locale = this.localeService.locale()): Observable<T> {
    const cacheKey = `${locale}/${slug}`;
    const cached = this.cache.get(cacheKey);
    if (cached) {
      return cached as Observable<T>;
    }

    const fallbackLocale = this.localeService.default;
    const request$ = this.http.get<T>(`assets/content/${locale}/${slug}.json`).pipe(
      catchError(() => {
        if (locale === fallbackLocale) {
          return of(null as T);
        }
        return this.http.get<T>(`assets/content/${fallbackLocale}/${slug}.json`);
      }),
      shareReplay({ bufferSize: 1, refCount: false })
    );

    this.cache.set(cacheKey, request$);
    return request$;
  }

  /** Like `get`, but re-fetches whenever the active locale changes. */
  watch<T>(slug: string): Observable<T> {
    return this.locale$.pipe(switchMap((locale) => this.get<T>(slug, locale)));
  }
}
