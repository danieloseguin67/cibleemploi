import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ContentService } from '../../core/content.service';
import { LocalePathPipe } from '../../core/pipes/locale-path.pipe';
import type { ServicesIndexContent } from '../../core/models/content.models';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink, LocalePathPipe],
  template: `
    <ng-container *ngIf="content() as page">
      <h1>{{ page.title }}</h1>
      <div class="service-cards">
        <article class="service-card" *ngFor="let service of page.services">
          <h2>{{ service.title }}</h2>
          <p>{{ service.excerpt }}</p>
          <a [routerLink]="service.path | localePath">→</a>
        </article>
      </div>
    </ng-container>
  `,
  styles: [
    `
      .service-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
        margin-top: 1.5rem;
      }
      .service-card {
        background: #f7fafc;
        border-radius: 8px;
        padding: 1.5rem;
      }
      .service-card h2 {
        color: #0f5c8c;
      }
      .service-card a {
        color: #0f5c8c;
        font-weight: 700;
        text-decoration: none;
      }
    `
  ]
})
export class ServicesComponent {
  private readonly contentService = inject(ContentService);
  readonly content = toSignal(this.contentService.watch<ServicesIndexContent>('services'), { initialValue: null });
}
