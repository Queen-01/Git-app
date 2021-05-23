import { Injectable } from '@angular/core';
import { Users } from '../users';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../repo';
import { environment } from 'src/environments/environment.prod';
// import { environment } from "../environments/environment.prod";
@Injectable({
  providedIn: 'root',
})
export class GitService {
  searchUser!: Users;
  allRepos!: Repo;

  constructor(private http: HttpClient) {
    this.searchUser = new Users('', '', '', 0, 0, 0, new Date());
    this.allRepos = new Repo('', '', '', new Date());
  }
  repoSearch(username: string) {
    interface Response {
      name: string;
      login: string;
      avatar_url: string;
      followers: number;
      following: number;
      created_On: Date;
    }
    return new Promise<void>((resolve, reject) => {
      this.http
        .get<Response>(
          'https://api.github.com/user' +
            username +
            '?access_token=' +
            environment.apiKey
        )
        .toPromise()
        .then(
          (results: any) => {
            this.searchUser = results;
            console.log(this.searchUser);
            resolve();
          },
          (error: any) => {
            console.log(error);
            reject();
          }
        );
    });
  }

  getPublicRepos(username: any){
    interface Repos{
      name: string,
      description: string,
      language: string,
      created_at: Date,
    }
    return new Promise<void>((resolve,reject)=>{
      const username= 'Queen-01'
      this.http.get<Repos>('https://api.github.com/user'+ username + '/repos?order=created&sort=asc?access_token=' + environment.apiKey).toPromise().then(
        (results: any)=>{
          this.allRepos= results;
          console.log(this.allRepos);
          resolve();
        },
        (error: any)=>{
          console.log(error)
          reject()
        }
      )
    })
  }
}
