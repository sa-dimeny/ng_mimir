import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from '../game-status/game.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('f') signupForm!: NgForm;

  constructor(
    private gameService: GameService,
    private router: Router
  ) {}

  onLogin() {
    this.gameService.initializeUser(this.signupForm.value.username);
    this.router.navigate(['game'])
  };
}
