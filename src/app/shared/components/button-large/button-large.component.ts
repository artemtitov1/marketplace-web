import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-large',
  templateUrl: './button-large.component.html',
  styleUrls: ['./button-large.component.scss']
})
export class ButtonLargeComponent {
  
  @Input()
  value?: string;

  @Input()
  color_transparent?: boolean;
}
