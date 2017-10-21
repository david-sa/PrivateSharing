import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-popover',
  template: '<ng-template #message>It seems that it is not available.<br><b>Try later!</b></ng-template>',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

  @ViewChild('message') template;
  title = "Oops!";

  constructor() { }

  ngOnInit() {
  }

}
