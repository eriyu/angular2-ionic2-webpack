import { Component } from '@angular/core';
import {Platform} from "ionic-angular";
import {HomePage} from "./home/home";
import { AppFunctionListService } from './service/app.function.list.service';

@Component({
  styles: [require('./app.component.scss').toString()],
  template: `<ion-nav [root]="rootPage"></ion-nav>`,
  providers: [AppFunctionListService]
})
export class AppComponent {
  rootPage = HomePage;
  constructor(platform: Platform) {
    platform.ready().then(() => {
      console.log(platform.platforms());
    });
  }
}