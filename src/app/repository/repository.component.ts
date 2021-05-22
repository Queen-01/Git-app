import { Component, OnInit } from '@angular/core';
import { Users } from '../users'
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  user!: Users;

  constructor() { }

  ngOnInit(): void {
  }

}
