import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GitService } from '../repo/git.service'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  username: string=''

  @Output() searchTerm= new EventEmitter()
  constructor(private repoService: GitService) { }

  ngOnInit(): void {
  }

  search(){
    this.searchTerm.emit(this.username);
    this.username = "";
  }
  

}
