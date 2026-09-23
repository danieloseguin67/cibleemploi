import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { ContentService } from '../../../core/content.service';
import type { ResourceListContent } from '../../../core/models/content.models';

@Component({
  selector: 'app-resource-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resource-list.component.html',
  styleUrl: './resource-list.component.scss'
})
export class ResourceListComponent {
  private readonly contentService = inject(ContentService);
  private readonly route = inject(ActivatedRoute);

  readonly content = toSignal(
    this.route.data.pipe(switchMap((data) => this.contentService.watch<ResourceListContent>(data['slug']))),
    { initialValue: null }
  );
}
