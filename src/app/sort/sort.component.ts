import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  @Output() sortEvent = new EventEmitter();
  @Output() reverseFunc = new EventEmitter();

  activeSort = false;
  activeReverse = false;

  constructor() { }

  ngOnInit() {
  }

  sortName(tag) {
    this.sortEvent.emit(null);
    if (this.activeSort === false) {
      tag.style.backgroundColor = 'rgb(172, 172, 172)';
    } else {
      tag.style.backgroundColor = 'rgb(199, 199, 199)';
    }

    this.activeSort = !this.activeSort;
  }

  reverse(tag) {
    this.reverseFunc.emit(null);

    if (this.activeReverse === false) {
      tag.style.backgroundColor = 'rgb(172, 172, 172)';
    } else {
      tag.style.backgroundColor = 'rgb(199, 199, 199)';
    }

    this.activeReverse = !this.activeReverse;
  }
}
