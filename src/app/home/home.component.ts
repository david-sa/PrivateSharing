import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private renderer: Renderer2 ) { }

  ngOnInit() {
    this.renderer.addClass(document.getElementsByClassName( 'navbar' )[0], 'home-navbar');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.getElementsByClassName( 'navbar' )[0], 'home-navbar');
  }

}
