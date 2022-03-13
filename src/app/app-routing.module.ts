import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamePlayComponent } from './game/game-play/game-play.component';
import { HomeScreenComponent } from './game/home-screen/home-screen.component';


const routes: Routes = [
  { path: 'play' , component: GamePlayComponent }, //Game screen
  { path: 'home' , component : HomeScreenComponent }, // Home screen
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to Home Screen
  // { path: '**', component: PageNotFoundComponent },  // 404 Page Not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
