import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { ContentService } from '../../core/content.service';
import { UiService } from '../../core/ui.service';
import type { ContactContent } from '../../core/models/content.models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private readonly contentService = inject(ContentService);
  private readonly fb = inject(FormBuilder);
  readonly ui = inject(UiService).ui;

  readonly content = toSignal(this.contentService.watch<ContactContent>('contact'), { initialValue: null });
  readonly submitted = signal(false);

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // Not wired to a backend endpoint yet; client-side validation only.
    this.submitted.set(true);
    this.form.reset();
  }
}
