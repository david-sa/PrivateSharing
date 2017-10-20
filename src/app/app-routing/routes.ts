import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { DownloadComponent } from '../download/download.component';
import { WhyComponent } from '../why/why.component';
import { DocsComponent } from '../docs/docs.component';
import { CodeComponent } from '../code/code.component';
import { SupportComponent } from '../support/support.component';

export const routes: Routes = [
  { path: 'home',     component: HomeComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'why',      component: WhyComponent },
  { path: 'docs',     component: DocsComponent },
  { path: 'code',     component: CodeComponent },
  { path: 'support',  component: SupportComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];