import { Component, OnInit } from '@angular/core';
import { Users } from '../users'
import { GitService } from '../repo/git.service'
import { Repo } from '../repo';
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  users!: Users;
  repo!: Repo;

  constructor(public repoService: GitService) { }
  repoSearch(username: any){
    this.repoService.repoSearch(username).then(
      (success: any)=>{
        this.users= this.repoService.searchUser;
      },
      (error: any)=>{
      }
    )
    this.repoService.getPublicRepos(username).then(
      (success: any)=>{
        this.repo = this.repoService.allRepos
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  ngOnInit(): void {
    this.repoSearch('Queen-01')
  }

}
