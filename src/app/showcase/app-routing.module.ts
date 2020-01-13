import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FullCalendarComponent } from './Screens/full-calendar/full-calendar.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: FullCalendarComponent}, 
            {path: 'fullcalendar', component: FullCalendarComponent},
            {path: 'main', loadChildren: () => import('../dash-board/dash-board.module').then(m => m.DashBoardModule)},
        ], {scrollPositionRestoration: 'enabled'})    
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}