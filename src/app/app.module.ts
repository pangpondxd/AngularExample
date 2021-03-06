import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './componemts/user/user.component';
import { AboutusComponent } from './componemts/aboutus/aboutus.component';
import { FormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule ,Routes} from '@angular/router';
const appRoutes:Routes = [
  {path:'', component:UserComponent},
  {path:'about', component:AboutusComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    UserComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
