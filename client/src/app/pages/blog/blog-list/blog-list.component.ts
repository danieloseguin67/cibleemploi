import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ContentService } from '../../../core/content.service';
import { UiService } from '../../../core/ui.service';
import { LocalePathPipe } from '../../../core/pipes/locale-path.pipe';
import type { BlogPostSummary } from '../../../core/models/content.models';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterLink, LocalePathPipe],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {
  private readonly contentService = inject(ContentService);
  readonly ui = inject(UiService).ui;

  readonly posts = toSignal(this.contentService.watch<BlogPostSummary[]>('blog-posts'), { initialValue: [] as BlogPostSummary[] });
}
