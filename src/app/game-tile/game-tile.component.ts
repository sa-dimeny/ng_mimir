import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameBoardService, Tile } from '../game-board/game-board.service';

@Component({
  selector: 'app-game-tile',
  templateUrl: './game-tile.component.html',
  styleUrls: ['./game-tile.component.css']
})

export class GameTileComponent {
  @Input() tileData!: Tile;

  private subscription: Subscription = new Subscription;

  constructor(private gameBoardService: GameBoardService) {}

  }
