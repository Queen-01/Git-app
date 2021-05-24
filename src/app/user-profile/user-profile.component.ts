import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { GitService } from '../repo/git.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 users:Users[] =[]
 pizza!: any[];
gitUser: string='';
  constructor(private gitService:GitService) { }

  getSearchItem(searchItem: string){
    this.gitUser= searchItem
    this.gitService.searchUser(searchItem).then(
      (success: any) => {
        this.pizza = this.gitService.users
        console.log(this.pizza)
      },
      (error: any)=>{
        console.log(error);
      }
      );
  }
  ngOnInit() {
    this.getSearchItem('username');
    this.getSearchItem(this.gitUser)
  }

}
