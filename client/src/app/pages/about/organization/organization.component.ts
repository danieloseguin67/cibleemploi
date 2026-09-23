import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { ContentService } from '../../../core/content.service';
import type { OrganizationContent } from '../../../core/models/content.models';

@Component({
  selector: 'app-about-organization',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="content() as page">
      <h1>{{ page.title }}</h1>
      <p *ngFor="let paragraph of page.body.paragraphs">{{ paragraph }}</p>
    </ng-container>
  `
})
export class OrganizationComponent {
  private readonly contentService = inject(ContentService);
  readonly content = toSignal(this.contentService.watch<OrganizationContent>('about-organization'), { initialValue: null });
}
