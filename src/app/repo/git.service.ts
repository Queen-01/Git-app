import { Injectable } from '@angular/core';
import { Users } from '../users'
import { HttpClientModule } from '@angular/common/http'
import { Repo } from '../repo';
import { environment } from 'src/environments/environment.prod';
// import { environment } from "../environments/environment.prod";
@Injectable({
  providedIn: 'root'
})
export class GitService {

  searchUser!: Users;
  allRepos!: Repo;

  constructor(private http:HttpClientModule) {
    this.searchUser= new Users("", "", "",0, 0, 0, new Date())
    this.allRepos = new Repo("","","", new Date)
   }
   repoSearch(username: string){
     interface Response{
       name: string,
       login: string,
       avatar_url: string,
       followers: number,
       following: number,
       created_On: Date
     }
     return new Promise<void>((resolve,reject)=>{
       this.http.get<Response>('https://api.github.com/user' + username + '?access_token' + environment.apiKey).toPromise().then(
         (result: any)=>{
           this.searchUser = result;
           console.log(this.searchUser);
           resolve()
         },
         (error: any)=>{
           console.log(error);
           reject()
         }
       )
     })
   }
}
