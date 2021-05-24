import { Component, Input, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Repos } from '../repository';
// import { Users } from "../users";
import { GitService } from '../repo/git.service'

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css'],
})
export class RepositoryComponent implements OnInit {
  repos!: Repos[];
  oderos: any = [];
  repoUser: any = '';
  gitservice: GitService;

  
  constructor(private repoService: GithubService, gitservice: GitService) {this.gitservice= gitservice}
  getrepository(searchItem: string) {
    this.repoService.getPublicRepos(searchItem).subscribe((data: Repos) => {
      this.oderos = data;
      console.log(this.oderos);
    });
  }
  ngOnInit() {
    this.repoUser=this.gitservice.users
    this.getrepository('Queen-01');
    console.log(this.repoUser.login);
  }
}
