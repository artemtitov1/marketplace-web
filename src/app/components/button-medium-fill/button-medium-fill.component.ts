import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-medium-fill',
  templateUrl: './button-medium-fill.component.html',
  styleUrls: ['./button-medium-fill.component.scss']
})
export class ButtonMediumFillComponent {
  @Input()
  value?: string;
}
