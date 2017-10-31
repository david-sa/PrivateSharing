import { Component } from '@angular/core';
import { routerTransition } from './app-routing/router.animation';

@Component({
  selector: 'app-root',
  animations: [ routerTransition ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Private Sharing';

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
