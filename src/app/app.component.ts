import { Component } from '@angular/core';
import { Iplayers } from './shared/model/players.compoent';
import { cricketers } from './shared/const/filterArray.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'filterPipe';
  searchValue: string = '';
  selectValue: string = '';
  players: Iplayers[] = cricketers;

  onSelect(ele:HTMLSelectElement){
    console.log(ele.value)
    this.selectValue = ele.value
  }
}
