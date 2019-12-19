import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counter = 1;
  running = false;
  res = '';
  odd = [];
  even = [];
  odd_even = [];
  ngOnInit(){}
  start(){
    this.running = true;
    setTimeout(() => {
      this.create();
    }, 1000);
  }
  create() {
      if (this.counter % 2) {
        // create odd
//       this.res = "odd" + this.counter;
        this.odd_even.push(this.counter);
      }
      else {
        // create even
//   this.res = "even" + this.counter;
        this.odd_even.push(this.counter);
      }
      this.counter++;
      setTimeout(() => {
        if (this.running){
          this.create();
        }
        else { this.counter = 0 }
        }, 1000);
  }
  stop() {
    this.running = false;
  }
}
