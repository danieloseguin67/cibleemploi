import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { ContentService } from '../../../core/content.service';
import type { TeamContent } from '../../../core/models/content.models';

@Component({
  selector: 'app-about-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  private readonly contentService = inject(ContentService);
  readonly content = toSignal(this.contentService.watch<TeamContent>('about-team'), { initialValue: null });
}
