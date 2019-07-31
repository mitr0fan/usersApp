import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReverseService {

  constructor() { }

  reverse(arr) {
    let newArr=[];
    for(let i=0; i<arr.length; i++) {
      newArr.push(arr[i]);
    }
    return newArr.reverse();
  }
}
