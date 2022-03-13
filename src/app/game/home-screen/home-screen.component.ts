import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(    private route: ActivatedRoute,
    private router: Router ) {

   }

  ngOnInit() {
  }

  playerName: string = '';
  emptyNameMessage:string = "Please enter your name";
  validName: boolean = true;

  onClick_Play() {
    if (this.playerName == '')
      this.validName = false;
    else {
      this.validName = true;
      this.router.navigate(['/play']);
      // this.router.navigate(['/heroes', { name: this.playerName }]);
    }

  }

  }

