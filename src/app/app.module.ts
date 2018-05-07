import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TextDecorationDirective } from './text-decoration.directive';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ButtonsComponent,
    TextDecorationDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
