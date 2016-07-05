import { Component,OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {NewsIndex} from "../news/news-index";
import {RailsIndex} from "../rails/rails-index";
import {AppFunctionListService } from '../service/app.function.list.service';
import {FirebaseListObservable} from 'angularfire2';

@Component({
  templateUrl:"app/home/home.html"
})
export class HomePage implements OnInit {

  fnlist: FirebaseListObservable<any[]>;

  constructor(private nav: NavController,private fnlistService: AppFunctionListService){}

  ngOnInit() {
    this.fnlist = this.fnlistService.getFunctionList();
  }

  goToContentPage(pgname:string) {
    let page;
    switch (pgname) {
      case "news":
        page = NewsIndex;
        break;
      case "rails":
        page = RailsIndex;
        break;
      default:
        break;
    }
    this.nav.push(page)
  }
}