import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  parameterString;
  items;
  constructor(
    private http: HttpClient
  ) { }

  getAllData(){
    this.http.get("http://rtq.chicheongweng.com:3000/securities").subscribe((res : any[])=>{
      console.log(res);
      this.items = res;
    });
    return this.items;
  }
}
