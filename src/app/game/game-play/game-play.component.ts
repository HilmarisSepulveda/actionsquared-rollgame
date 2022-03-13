import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/Game';
import { Player } from 'src/app/models/Player';
import { Roll } from 'src/app/models/Roll';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements OnInit {

  constructor(    private route: ActivatedRoute,
    private router: Router  ) { }

    playerName: string;



    currentRoll: Roll = {
      rollNumber: 1,
      value: 0
    }

    game: Game = {
      id: 0,
      gameDatetime: new Date(),
      rollCount: 0,
      powerUpActive: false,
      powerUpCount: 2
    }


    player: Player = {
      id: 0,
      name: 'Pepe',
      currentScore: 0,
      highScore: 0,
      rolls: [] ,
  }

  ngOnInit() {

    // const nameParam = this.route.snapshot.paramMap.get('name');
    // this.playerName = nameParam;
  }




  rollAction() {
    this.currentRoll.value = Math.floor((Math.random() * 10)); // Generate a integer between 0-1
    console.log("Roll: " + this.currentRoll.value)
    if(this.player.currentScore + this.currentRoll.value  <= 50)  {
      this.player.currentScore = this.player.currentScore+ this.currentRoll.value
      console.log("Total score: " + this.player.currentScore)
    }

    this.game.rollCount++
    console.log("Roll count: " + this.game.rollCount)
    this.player.rolls.push({
      rollNumber: this.game.rollCount,
      value: this.currentRoll.value,
    })

    if(this.player.currentScore== 50) {
      console.log("You win!")
    }

    console.log(this.currentRoll.isEven)
  }

  rollOdd()  {
    this.currentRoll.isEven = false;
  }

  rollEven() {
    this.currentRoll.isEven = true;
  }

  activatePowerUp() {
    if(this.game.powerUpCount > 0) {
      this.game.powerUpActive = true;
    }

  }

}
