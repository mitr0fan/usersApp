import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  configURL='https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture';
  
  constructor(private http:HttpClient) { }

  public obs: Observable<any>;

  public arr=[];

  public getConfig(): void {
    this.obs=this.http.get(this.configURL);
  }

  public get() {
    this.getConfig();

    this.obs.subscribe((value) => {
      for(let i=0; i<value.results.length; i++) {
        this.arr.push(value.results[i]);
      }
      this.arr.forEach(function(i) {
        i.name.full=i.name.first+' '+i.name.last;
      });
    });
  }
}
