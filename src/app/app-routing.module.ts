import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RepositoryComponent } from './repository/repository.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
const routes: Routes = [
  {path:'Repository', component:RepositoryComponent},
  {path:'Userprofile', component:UserProfileComponent},
  {path:'', component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
