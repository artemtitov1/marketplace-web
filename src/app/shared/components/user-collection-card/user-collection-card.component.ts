import { Component, Input } from '@angular/core';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'app-user-collection-card',
  templateUrl: './user-collection-card.component.html',
  styleUrls: ['./user-collection-card.component.scss']
})
export class UserCollectionCardComponent {
  @Input()
  data!: User;

  get fullName() {
    return this.data.name + ' ' + this.data.surname;
  }
}
