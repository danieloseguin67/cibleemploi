import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { ContentService } from '../../../core/content.service';
import type { BoardContent } from '../../../core/models/content.models';

@Component({
  selector: 'app-about-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.component.html',
  styleUrl: '../team/team.component.scss'
})
export class BoardComponent {
  private readonly contentService = inject(ContentService);
  readonly content = toSignal(this.contentService.watch<BoardContent>('about-board'), { initialValue: null });
}
