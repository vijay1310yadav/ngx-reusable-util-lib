import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter: number = 0;
  constructor() { }
  ngOnInit() {
  }
  onPlusBtnClick() {
    this.counter++;
  }
  onMinusBtnClick() {
    this.counter--;
  }
}
