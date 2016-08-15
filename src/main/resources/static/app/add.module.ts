

import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {AdditionComponent} from './addition.component';

const routes: Routes = [{ path: '', component: AdditionComponent}];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ ]
})

export default class AdderModule{}