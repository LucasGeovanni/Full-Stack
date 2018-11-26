import { Routes } from '@angular/router';
import { ControlComponent } from './components/control/control.component';
import { AboutComponent } from './components/about/about.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: ControlComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    }
    
]


