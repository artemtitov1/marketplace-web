import { Component } from '@angular/core';

export function parseJson<T>(data: T[]) {
  return JSON.parse(JSON.stringify(data));
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})

export class HomePageComponent {
}
