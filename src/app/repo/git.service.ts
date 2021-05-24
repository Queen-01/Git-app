import { Users } from '../users';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class GitService {
  users: Users[] = [];
  envronment: any;
  userDetail: string='';

  constructor(private http: HttpClient) {}

  searchUser(user: string) {
    this.userDetail= user
    interface data {
      name: string;
      login: string;
      avatar_url: string;
      public_repos: number;
      following: number;
      followers: number;
      created_On: Date;
    }
    return new Promise((resolve, reject) => {
      this.users = [];
      this.http
        .get<data>(
          'https://api.github.com/users/' + user +'?access_token=' + environment.apiKey,

          // this.userDetail=Response.name,
          // // this.user.avatar_url=Response.avatar_url,
          // // this.users.public_repos=Response.repos_url,
          // // this.users.name=Response.name,
          // // this.users.followers=Response.followers,
          // // this.users.following=Response.following,
        )
        .toPromise()
        .then(
          (results) => {
            console.log(results),
            this.users.push(results);
            resolve('');
          },
          (error) => {
            reject(console.log('Error occured'));
          }
        );
    });
  }
}
