import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ContentService } from '../../core/content.service';
import { UiService } from '../../core/ui.service';
import { LocalePathPipe } from '../../core/pipes/locale-path.pipe';
import type { HomeContent } from '../../core/models/content.models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, LocalePathPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly contentService = inject(ContentService);
  readonly ui = inject(UiService).ui;

  readonly content = toSignal(this.contentService.watch<HomeContent>('home'), { initialValue: null });
}
