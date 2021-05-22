import { Component, OnInit } from '@angular/core';
import { GitUser} from '../git-user'
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: GitUser[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
