import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl:"app/home/home.html"
})
export class HomePage {
  constructor(private nav: NavController){}
}