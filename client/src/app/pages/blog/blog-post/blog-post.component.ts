import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { combineLatest, map } from 'rxjs';
import { ContentService } from '../../../core/content.service';
import { UiService } from '../../../core/ui.service';
import { LocalePathPipe } from '../../../core/pipes/locale-path.pipe';
import type { BlogPost } from '../../../core/models/content.models';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterLink, LocalePathPipe],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent {
  private readonly contentService = inject(ContentService);
  private readonly route = inject(ActivatedRoute);
  readonly ui = inject(UiService).ui;

  readonly post = toSignal(
    combineLatest([this.route.paramMap, this.contentService.watch<BlogPost[]>('blog-posts')]).pipe(
      map(([params, posts]) => posts.find((post) => post.slug === params.get('slug')) ?? null)
    ),
    { initialValue: null }
  );
}
