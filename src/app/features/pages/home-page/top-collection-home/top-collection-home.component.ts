import { Component, OnInit, DoCheck } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/services/user.service';
import { parseJson } from '../page/home-page.component';

@Component({
  selector: 'app-top-collection-home',
  templateUrl: './top-collection-home.component.html',
  styleUrls: ['./top-collection-home.component.scss',
              './../page/home-page.component.scss']
})
export class TopCollectionHomeComponent implements OnInit, DoCheck{
constructor(private userService: UserService) { }

  users: User[] = [];

  ngOnInit(): void {
    this.userService.getItems(16).subscribe((data) => {
      this.users = parseJson<User>(data);
  });  
  }

  ngDoCheck(): void {
    this.users.sort(function(a, b) {
      return b.value - a.value;
    });
  }
}
