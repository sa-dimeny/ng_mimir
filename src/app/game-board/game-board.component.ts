import { Component, OnInit } from '@angular/core';
import { GameBoardService } from './game-board.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit{
  selectedPuck: any = "";

  constructor(private gameBoardService: GameBoardService) {}

  ngOnInit(): void {
  }

  getTileData(index: number) {
    return this.gameBoardService.getTileData(index);
  }

  onTileClicked(index: number) {
    let tileData = {...this.getTileData(index)};

    if (tileData.content.length > 0 && this.selectedPuck == "") {
      this.selectedPuck = tileData.content.pop()
      console.log(this.selectedPuck, "removed.");

    } else if (tileData.content.length === 0 && this.selectedPuck !== "") {
      tileData.content.push(this.selectedPuck);
      this.selectedPuck = "";
      console.log(this.selectedPuck, "added.");
    }
    this.gameBoardService.setTileData(index, tileData);
  }

}
