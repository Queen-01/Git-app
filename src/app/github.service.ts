import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Repos} from './repository'
import { GitService } from './repo/git.service'

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  repos!: Repos[];
  user: any;
  gitservice: GitService;

  constructor(private http:HttpClient, gitservice: GitService) {this.gitservice= gitservice}

  getPublicRepos(repoSearch:string):Observable<any>{
   return this.http.get(' https://api.github.com/users/' + repoSearch + '/repos?access_token=' + environment.apiKey)
  }

  // getRepos(repoSearch: string): Observable<any>{
  //   return this.http.get('https://api.github.com/users/' + repoSearch + '/repo?access_token=' + environment.apiKey)
  // }
}
