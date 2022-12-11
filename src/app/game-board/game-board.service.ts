import { Injectable } from "@angular/core";
import { Subject, Subscription } from "rxjs";

export interface Tile {
    index: number;
    type: string;
    content: string[];
}

export type BoardState = {
    [key:number]: Tile;
}

@Injectable({providedIn: 'root'})
export class GameBoardService {
    boardChanged = new Subject<BoardState>();
    gameState: BoardState = this.initializeBoard();

    getTileType(idx: number) {
        if (idx === 0) {
            return "start"
        }
        if ([1, 3, 6, 14, 25, 31, 34, 39, 46, 51, 58, 62].includes(idx)) {
            return "monk"
        }
        if ([11, 15, 19, 24, 30, 37, 43, 50, 56].includes(idx)) {
            return "shield"
        }
        if ([2, 5, 13, 21, 26, 33, 38, 40, 49, 55, 59, 61, 63].includes(idx)) {
            return "blood"
        }
        if ([10, 22, 42, 57].includes(idx)) {
            return "horn"
        }
        if ([8, 17, 23, 29, 35, 41, 47, 53].includes(idx)) {
            return "two"
        }
        if ([4, 12, 20, 28, 36, 44, 52].includes(idx)) {
            return "three"
        }
        if ([9, 18, 27, 45, 54].includes(idx)) {
            return "four"
        }
        if ([7, 16, 32, 48, 60].includes(idx)) {
            return "onefivesix"
        }
        if (idx === 64) {
            return "finish"
        }
        return ""
    }

    initializeBoard(numOfTiles: number = 64) {
        let initialState: BoardState = {0: {index: 0, type: "start", content: ['P', 'R', 'B', 'O', 'G', 'Y']}};
        for (let idx = 1; idx <=numOfTiles ; idx++) {
            initialState[idx] = {
                index: idx,
                type: this.getTileType(idx),
                content: []
            }
        }
        return initialState;
    }

    getTileData(index: number) {
        return this.gameState[index];
    }

    setTileData(index: number, newData: Tile) {
        this.gameState[index] = newData;
        this.boardChanged.next(this.gameState);
    }
}
