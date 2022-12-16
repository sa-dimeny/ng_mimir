import { Injectable } from "@angular/core";

export type Player = {
    name: string,
    colour: string,
    rage: number,
    drinks: number,
    hasToDrink: boolean
}

const colours = ['P', 'R', 'B', 'O', 'G', 'Y'];

@Injectable({providedIn: 'root'})
export class GameService {
    currentPlayer: string = "";
    myPlayer!: Player;
    players: Player[] = [];

    initializeUser(userName: string) {
        let userData: Player = {
            name: userName,
            colour: "Y",
            rage: 65,
            drinks: 3,
            hasToDrink: false
        }
        this.myPlayer = userData;
    }

    getUserData() {
        return this.myPlayer;
    }
}
