import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ContentService } from '../../core/content.service';
import { LocalePathPipe } from '../../core/pipes/locale-path.pipe';
import type { ResourcesIndexContent } from '../../core/models/content.models';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule, RouterLink, LocalePathPipe],
  template: `
    <ng-container *ngIf="content() as page">
      <h1>{{ page.title }}</h1>
      <p *ngIf="page.intro">{{ page.intro }}</p>
      <ul class="link-list">
        <li *ngFor="let link of page.links">
          <a [routerLink]="link.path | localePath">{{ link.label }}</a>
        </li>
      </ul>
    </ng-container>
  `,
  styles: [
    `
      .link-list {
        list-style: none;
        padding: 0;
      }
      .link-list a {
        color: #0f5c8c;
        font-weight: 600;
        text-decoration: none;
        line-height: 2;
      }
      .link-list a:hover {
        text-decoration: underline;
      }
    `
  ]
})
export class ResourcesComponent {
  private readonly contentService = inject(ContentService);
  readonly content = toSignal(this.contentService.watch<ResourcesIndexContent>('resources'), { initialValue: null });
}
