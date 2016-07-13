import { Injectable } from '@angular/core';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Injectable() 
export class AppFunctionListService {
    fnlist: Observable<any[]>;
    constructor(af: AngularFire) {
        this.fnlist = af.database.list('function-list');
    }
    getFunctionList() {
        return this.fnlist;
    }
}