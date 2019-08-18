import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { dashBoardEntry } from './pageModel/dashBoardEntry';
import { PagedData } from './pageModel/paged-data';
import { Page } from './pageModel/page';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  parameterString;
  items;
  constructor(
    private http: HttpClient
  ) { }
  
  public getResult(page: Page): Observable<PagedData<dashBoardEntry>>{
    const baseUrl = "http://rtq.chicheongweng.com:3000/securities";
    const pagedData = new PagedData<dashBoardEntry>();
    page.totalElements = this.items.length;
    page.totalPages = page.totalElements / page.size;
    let queryParam  = "";
    const start = page.pageNumber * page.size;
    const end = Math.min((start + page.size), page.totalElements);
    for (let i = start; i < end; i++){
        const jsonObj = this.items[i];
        const entry = new dashBoardEntry(jsonObj.accumulated_turnover, jsonObj.account_executive, jsonObj.daily_turnover);
        pagedData.data.push(entry);
    }
    pagedData.page = page;
    return pagedData;
  }

  getAllData(){
    //this.items =[];
    // this.http.get("http://rtq.chicheongweng.com:3000/securities").subscribe((res : any[])=>{
    //   if(res){
    //     for(let i = 0; i < res.length; i ++){
    //       const jsonObj = res[i];

    //       this.items.push(new dashBoardEntry(res[i].accumulated_turnover, res[i].account_executive, res[i].daily_turnover));
    //       console.log(this.items[i]);
    //     }
    //     return this.items;
    //   }
    // });
    // this.items = [];
    //     this.http.get("http://rtq.chicheongweng.com:3000/securities").subscribe((res : any[])=>{
    //     console.log(res);
    //     this.items = res;
    // });
    // return this.items;

    this.http.get("http://rtq.chicheongweng.com:3000/securities").subscribe((res : any[])=>{
      console.log(res);
      this.items = res;
    });
    return this.items;
  }
}
