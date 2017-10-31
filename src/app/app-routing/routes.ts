import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { DownloadComponent } from '../download/download.component';
import { WhyComponent } from '../why/why.component';
import { DocsComponent } from '../docs/docs.component';
import { CodeComponent } from '../code/code.component';
import { SupportComponent } from '../support/support.component';

export const routes: Routes = [
  { path: 'home',     component: HomeComponent },
  { path: 'download', component: DownloadComponent, data: { state: 'download' } },
  { path: 'why',      component: WhyComponent,      data: { state: 'why' } },
  { path: 'docs',     component: DocsComponent,     data: { state: 'docs' } },
  { path: 'code',     component: CodeComponent,     data: { state: 'code' } },
  { path: 'support',  component: SupportComponent,  data: { state: 'support' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];