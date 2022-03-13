import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './game/home-screen/home-screen.component';
import { FormsModule } from '@angular/forms';
import { GamePlayComponent } from './game/game-play/game-play.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    GamePlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
