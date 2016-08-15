

import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import {IncComponent} from './inc.component';

const routes: Routes = [{ path: '', component: IncComponent}];

@NgModule({
    imports: [  RouterModule.forChild(routes) ],
    declarations: [ ]
})

export default class IncModule{}