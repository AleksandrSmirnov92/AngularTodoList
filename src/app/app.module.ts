import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { TodoForm } from './main/todo-form/todo-form.component';
import { TodoListComponent } from './main/todo-list/todo-list.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MainComponent, TodoForm, TodoListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
