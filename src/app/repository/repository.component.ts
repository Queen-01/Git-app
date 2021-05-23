import { Component, OnInit } from '@angular/core';
import { Users } from '../users'
import { GitService } from '../repo/git.service'
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  users!: Users;

  constructor(public repoService: GitService) { }
  repoSearch(username: any){
    this.repoService.repoSearch(username).then(
      (success: any)=>{
        this.users= this.repoService.searchUser;
      },
      (error: any)=>{
      }
    )
  }
  ngOnInit(): void {
  }

}
