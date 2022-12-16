import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GameBoardComponent } from "./game-board/game-board.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'game', component: GameBoardComponent},
    { path: '**', redirectTo: '/not-found'}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
