import { Routes } from '@angular/router';
import { ShellComponent } from './layout/shell/shell.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { OrganizationComponent } from './pages/about/organization/organization.component';
import { TeamComponent } from './pages/about/team/team.component';
import { BoardComponent } from './pages/about/board/board.component';
import { CareerComponent } from './pages/about/career/career.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServiceDetailComponent } from './pages/services/detail/service-detail.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ResourceListComponent } from './pages/resources/resource-list/resource-list.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogListComponent } from './pages/blog/blog-list/blog-list.component';
import { BlogPostComponent } from './pages/blog/blog-post/blog-post.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'fr' },
  {
    path: ':lang',
    component: ShellComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'about/organization', component: OrganizationComponent },
      { path: 'about/team', component: TeamComponent },
      { path: 'about/board', component: BoardComponent },
      { path: 'about/career', component: CareerComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'services/job-search-assistance', component: ServiceDetailComponent, data: { slug: 'service-job-search-assistance' } },
      { path: 'services/job-search-method', component: ServiceDetailComponent, data: { slug: 'service-job-search-method' } },
      { path: 'resources', component: ResourcesComponent },
      { path: 'resources/info-session', component: ResourceListComponent, data: { slug: 'resource-info-session' } },
      { path: 'resources/job-sites', component: ResourceListComponent, data: { slug: 'resource-job-sites' } },
      { path: 'resources/business-directories', component: ResourceListComponent, data: { slug: 'resource-business-directories' } },
      { path: 'resources/english-courses', component: ResourceListComponent, data: { slug: 'resource-english-courses' } },
      { path: 'resources/francization', component: ResourceListComponent, data: { slug: 'resource-francization' } },
      { path: 'resources/complaints-policy', component: PolicyComponent, data: { slug: 'resource-complaints-policy' } },
      { path: 'harassment-policy', component: PolicyComponent, data: { slug: 'harassment-policy' } },
      { path: 'blog', component: BlogListComponent },
      { path: 'blog/:slug', component: BlogPostComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', component: NotFoundComponent }
    ]
  },
  { path: '**', redirectTo: 'fr' }
];
