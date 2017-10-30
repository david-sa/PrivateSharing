import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {

  public model: any;
  statesWithFlags;
  @ViewChild("tabset") tabset;
  @ViewChild("acc1") acc1;
  @ViewChild("acc2") acc2;
  
  constructor() {}

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .map(term => term === '' ? []
        : this.statesWithFlags.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

  formatter = (x: {name: string}) => x.name;

  updateModel( e ) {
    this.model = e;
    if (this.model.name ) {
      this.tabset.select( this.model.tab );
      if( !this.model.accordion.panels.find( p => p.id === this.model.panel ).isOpen ){
        this.model.accordion.toggle( this.model.panel );
      }
      document.querySelector('#' + this.model.panel + '-header' ).scrollIntoView();       
    } 
  }

  ngOnInit() {}

  ngAfterViewInit() {
    console.log("view init");
    this.statesWithFlags = [
      // User manual
      {'name': 'Overview', 'tab': 'tab1', 'accordion': this.acc1, 'panel': 't1-static-1' },
      {'name': 'Download', 'tab': 'tab1', 'accordion': this.acc1, 'panel': 't1-static-2' },
      {'name': 'Adding content', 'tab': 'tab1', 'accordion': this.acc1, 'panel': 't1-static-3' },
      {'name': 'Adding contacts', 'tab': 'tab1', 'accordion': this.acc1, 'panel': 't1-static-4' },
      {'name': 'Creating groups', 'tab': 'tab1', 'accordion': this.acc1, 'panel': 't1-static-5' },
      {'name': 'Sharing content', 'tab': 'tab1', 'accordion': this.acc1, 'panel': 't1-static-6' },
      {'name': 'Setting up a custom server', 'tab': 'tab1', 'accordion': this.acc1, 'panel': 't1-static-7' },
      // Developers guide
      {'name': 'Overview', 'tab': 'tab2', 'accordion': this.acc2, 'panel': 't2-static-1' },
      {'name': 'Getting started', 'tab': 'tab2', 'accordion': this.acc2,  'panel': 't2-static-2' },
      {'name': 'Fundamentals', 'tab': 'tab2', 'accordion': this.acc2,  'panel': 't2-static-3' },
      {'name': 'Encryption methods', 'tab': 'tab2', 'accordion': this.acc2,  'panel': 't2-static-4' },
      {'name': 'Techniques', 'tab': 'tab2', 'accordion': this.acc2,  'panel': 't2-static-5' },
      {'name': 'API', 'tab': 'tab2', 'accordion': this.acc2,  'panel': 't2-static-6' }
    ];
  }
}
