import { Injectable } from '@angular/core';
import { Users } from '../users'
import { HttpClientModule } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GitService {

  searchUser!: Users;

  constructor(private http:HttpClientModule) {
    this.searchUser= new Users("", "",0, 0, 0, new Date())
   }
}
