import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { SortService } from '../sort.service';
import { ReverseService } from '../reverse.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  arr=[];
  newArr=[];
  active:boolean=false;
  userInfo;

  constructor(
    private configService:ConfigService,
    private sortService:SortService,
    private reverseService:ReverseService
    ) { }
  

  ngOnInit() {
    this.configService.get();
    this.arr=this.configService.arr;
  }
  
  makeSort() {
    if(this.active==false) {
      this.newArr=this.sortService.sortArr(this.arr);
      this.active=!this.active;
    }
    else {
      this.newArr=[];
      this.active=!this.active;
    }
  }

  makeReverse(){
    if(this.newArr.length>0) {
      this.newArr=this.reverseService.reverse(this.newArr);
    }
    else {
      this.arr=this.reverseService.reverse(this.arr);
    }
  }

  filter(value) {
    value=value.toLowerCase();
    this.newArr=[];
    if(value.length>0) {
      this.newArr=this.arr.filter(function(i) {
        let str=i.name.full.slice(0, value.length);
        if(str==value) return true;
      });
    }
  }

  selectUser(obj) {
    this.userInfo=obj;
  }

  close(){
    this.userInfo=undefined;
  }
}
