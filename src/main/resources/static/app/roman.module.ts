

import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {RomanComponent} from './roman.component';

const routes: Routes = [{ path: '', component: RomanComponent}];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ ]
})

export default class RomanModule{}