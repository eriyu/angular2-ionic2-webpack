import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable() 
export class AppFunctionListService {
    fnlist: FirebaseListObservable<any[]>;
    constructor(af: AngularFire) {
        this.fnlist = af.database.list('function-list');
    }
    getFunctionList() {
        return this.fnlist;
    }
}