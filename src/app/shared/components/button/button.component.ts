import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import IButtonProps from './button-props';

@Component({
  selector: 'button[customButton], a[customButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements IButtonProps {
  @Input()
  color!: 'orange' | 'white' | 'transparent';

  constructor() {
  }

  @HostBinding('class.custom-button')
  _customButton = true;
}
