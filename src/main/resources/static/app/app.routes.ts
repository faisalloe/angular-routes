import {Routes, RouterModule } from '@angular/router';


import {LandingComponent} from './landing.component';
import {HelloComponent} from './hello.component';

const routes: Routes= getScreens();

export const routing = RouterModule.forRoot(routes);

function getScreens(){
    var results :Array<Object> = Array<Object>();
    results.push(
        {
            path: '',
            component: LandingComponent
        }
    );

    results.push({
            path: 'hello',
            component: HelloComponent
    });

    results.push({
            path: '',
            redirectTo: '/hello',
            pathMatch: 'full'
        }
    );

    results.push(
        {
            path: 'increment',
            loadChildren: 'app/inc.module'
        }

    );

    results.push(
        {
            path: 'adder',
            loadChildren: 'app/add.module'
        }

    );

    results.push(
        {
            path: 'roman',
            loadChildren: 'app/roman.module'
        }
        
    );



    return results;
}
