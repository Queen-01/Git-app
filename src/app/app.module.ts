import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoryComponent } from './repository/repository.component';
import { DateCountPipe } from './date-count.pipe';
import { GitService } from './repo/git.service';
import { UserFormComponent } from './user-form/user-form.component';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    DateCountPipe,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
