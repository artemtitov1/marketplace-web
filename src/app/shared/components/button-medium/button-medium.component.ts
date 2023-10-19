import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-medium',
  templateUrl: './button-medium.component.html',
  styleUrls: ['./button-medium.component.scss']
})
export class ButtonMediumComponent {
  @Input()
  value?: string;
}
