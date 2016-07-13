import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl:"app/pages/news/news-index.html"
})
export class NewsIndex {
  constructor(private nav: NavController){}
}