import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DocsComponent } from './docs/docs.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { DownloadComponent } from './download/download.component';
import { WhyComponent } from './why/why.component';
import { CodeComponent } from './code/code.component';
import { SupportComponent } from './support/support.component';
import { PopoverComponent } from './popover/popover.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DocsComponent,
    DownloadComponent,
    WhyComponent,
    CodeComponent,
    SupportComponent,
    PopoverComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
