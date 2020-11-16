import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'layout-center',
  template: '<ng-content></ng-content>',
  styleUrls: ['./center.component.scss'],
})
export class CenterComponent {
  @HostBinding('style.max-width') @Input() maxWidth = '1.5rem';

  constructor() {
  }

}
