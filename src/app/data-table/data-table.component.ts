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
  rows;
  columns = [
      {prop: 'accumulated_turnover', name: 'Accumulated Turnover'},
      {prop: 'account_executive', name: 'Account Executive'},
      {prop: 'daily_turnover', name: 'Daily Turnover'}
  ]
  ngOnInit() {
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
  } 
}
