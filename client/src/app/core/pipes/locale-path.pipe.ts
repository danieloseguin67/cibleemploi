import { Pipe, PipeTransform, inject } from '@angular/core';
import { LocaleService } from '../locale.service';

/** Builds router link commands for a locale-relative path, e.g. 'about/team' -> ['/', 'fr', 'about', 'team']. */
@Pipe({ name: 'localePath', standalone: true, pure: false })
export class LocalePathPipe implements PipeTransform {
  private readonly localeService = inject(LocaleService);

  transform(path: string | null | undefined): string[] {
    const locale = this.localeService.locale();
    const segments = (path ?? '').split('/').filter(Boolean);
    return ['/', locale, ...segments];
  }
}
