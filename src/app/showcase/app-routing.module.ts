import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', redirectTo: 'main',pathMatch:'full'}, 
            {path: 'main', loadChildren: () => import('../dash-board/dash-board.module').then(m => m.DashBoardModule)},
        ], {scrollPositionRestoration: 'enabled'})    
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}