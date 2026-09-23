import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { ContentService } from '../../core/content.service';
import type { PolicyContent } from '../../core/models/content.models';

@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.scss'
})
export class PolicyComponent {
  private readonly contentService = inject(ContentService);
  private readonly route = inject(ActivatedRoute);

  readonly content = toSignal(
    this.route.data.pipe(switchMap((data) => this.contentService.watch<PolicyContent>(data['slug']))),
    { initialValue: null }
  );
}
