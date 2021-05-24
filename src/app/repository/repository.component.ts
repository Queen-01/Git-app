import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { GitService } from '../repo/git.service';
import { Repo } from '../repo';
import { Users } from "../users";



@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})

export class RepositoryComponent implements OnInit {

users!: Users;
repo!: Repo;
constructor( public repoService: GitService ) { }


repoSearch(username: string){
  this.repoService.repoSearch(username).then(
    ( success:any)=>{
      this.users = this.repoService.searchUser;
    },
    (error:any)=>{
    }
   )
   this.repoService.getPublicRepos(username).then(
     ( success:any)=>{
       this.repo = this.repoService.allRepos;
     },
     (error:any)=>{
       console.log(error)
     }
    )
 }
ngOnInit() {
  this.repoSearch('Queen-01');
}


}
