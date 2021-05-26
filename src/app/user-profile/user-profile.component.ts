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
  user!: string;
  constructor(private gitService:GitService) { }

  getSearchItem(searchItem: string){
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

  getSearch(search: string){
    this.gitUser= search
    this.gitService.searchUser(search).then(
      (success: any)=>{
        this.user =this.gitService.userDetail
        console.log(this.user)
      },
      (error: any)=>{
        console.log();
      }
    )
  }
  ngOnInit() {
    this.getSearchItem('Queen-01');
    this.getSearch(this.gitUser)
  }

}
