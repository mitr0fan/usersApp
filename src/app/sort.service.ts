import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  sortArr(arr) {
    let newArr=[];
    for(let i=0; i<arr.length; i++) {
      newArr.push(arr[i]);
    }
    return newArr.sort((a,b)=>{
      if(a.name.first>b.name.first) return 1
      else return -1;
      })
  }
}
