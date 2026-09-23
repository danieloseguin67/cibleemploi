import { Injectable, computed, inject } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import type { UiStrings } from './models/content.models';
import { ContentService } from './content.service';
import { LocaleService } from './locale.service';

@Injectable({ providedIn: 'root' })
export class UiService {
  private readonly contentService = inject(ContentService);
  private readonly localeService = inject(LocaleService);

  private readonly locale$ = toObservable(this.localeService.locale);

  private readonly uiSignal = toSignal(
    this.locale$.pipe(switchMap((locale) => this.contentService.get<UiStrings>('ui', locale))),
    { initialValue: null }
  );

  readonly ui = computed(() => this.uiSignal());
}
