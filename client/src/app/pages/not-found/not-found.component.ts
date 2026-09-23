import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UiService } from '../../core/ui.service';
import { LocalePathPipe } from '../../core/pipes/locale-path.pipe';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink, LocalePathPipe],
  template: `
    <div class="not-found" *ngIf="ui() as strings">
      <h1>{{ strings.notFound.title }}</h1>
      <p>{{ strings.notFound.message }}</p>
      <a [routerLink]="'' | localePath">{{ strings.notFound.homeLink }}</a>
    </div>
  `,
  styles: [
    `
      .not-found {
        text-align: center;
        padding: 3rem 1rem;
      }
      a {
        color: #0f5c8c;
        font-weight: 700;
      }
    `
  ]
})
export class NotFoundComponent {
  readonly ui = inject(UiService).ui;
}
