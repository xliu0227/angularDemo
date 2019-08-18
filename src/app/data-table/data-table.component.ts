import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { Page} from '../pageModel/page';
import { PagedData} from '../pageModel/paged-data';
import {dashBoardEntry } from '../pageModel/dashBoardEntry';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  page= new Page();
  rows;//:Observable<any[]>;
  //rows:Array<dashBoardEntry> = [];
  columns = [
      {prop: 'accumulated_turnover', name: 'Accumulated Turnover'},
      {prop: 'account_executive', name: 'Account Executive'},
      {prop: 'daily_turnover', name: 'Daily Turnover'}
  ]
  ngOnInit() {
        //interval(5000).subscribe(() => {
          
  }
 

  constructor(
    private dataSer: DataService,
  ) {
    this.page.pageNumber = 0;
    this.page.size = 5;
    interval(5000).subscribe(() => {
    this.rows = dataSer.getAllData();
    console.log(this.rows);
    });
    
    //this.rows = [...this.rows];
  } 



  setPage(pageInfo){
     console.log("trigger set page  " + pageInfo);
    this.page.pageNumber = pageInfo.offset;
    
    // this.dataSer.getResult(this.page).
    //   subscribe(pagedData => {
    //     this.page = pagedData.page;
    //     this.rows = pagedData.data;
    //   });
  }


  onSort(event) {
    // event was triggered, start sort sequence
    console.log('Sort Event', event);
    console.log(event.column.prop);
    console.log(event.newValue);
    //this.loading = true;
    // emulate a server request with a timeout
    // setTimeout(() => {
    //   const rows = [...this.rows];
    //   // this is only for demo purposes, normally
    //   // your server would return the result for
    //   // you and you would just set the rows prop
    //   const sort = event.sorts[0];
    //   rows.sort((a, b) => {
    //     return a[sort.prop].localeCompare(b[sort.prop]) * (sort.dir === 'desc' ? -1 : 1);
    //   });

    //   this.rows = rows;
    //   this.loading = false;
    // }, 1000);
  }

}
