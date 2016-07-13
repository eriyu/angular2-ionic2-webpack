import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import { RailsTHSR } from '../rails/rails-thsr';
import { RailsTRA  } from '../rails/rails-tra';

@Component({
  templateUrl: 'app/pages/rails/rails-index.html',
  directives: [RailsTHSR,RailsTRA] 
})
export class RailsIndex {
  railType: string = "tra";
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}