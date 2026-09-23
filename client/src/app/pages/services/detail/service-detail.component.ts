import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { ContentService } from '../../../core/content.service';
import { LocalePathPipe } from '../../../core/pipes/locale-path.pipe';
import type { ServiceDetailContent } from '../../../core/models/content.models';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, LocalePathPipe],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss'
})
export class ServiceDetailComponent {
  private readonly contentService = inject(ContentService);
  private readonly route = inject(ActivatedRoute);

  readonly content = toSignal(
    this.route.data.pipe(switchMap((data) => this.contentService.watch<ServiceDetailContent>(data['slug']))),
    { initialValue: null }
  );
}
