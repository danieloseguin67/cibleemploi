import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LocaleService } from '../../core/locale.service';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly localeService = inject(LocaleService);

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const lang = params.get('lang');
      if (this.localeService.isSupported(lang)) {
        this.localeService.setLocale(lang);
      } else {
        this.router.navigate(['/', this.localeService.default]);
      }
    });
  }
}
