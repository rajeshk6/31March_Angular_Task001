import { Component, OnInit } from '@angular/core';
import { pastry } from '../pastry.mock';


@Component({
  selector: 'app-pastry-list',
  templateUrl: './pastry-list.component.html',
  styleUrls: ['./pastry-list.component.css']
})
export class PastryListComponent implements OnInit {
  item=pastry;

  constructor() { }

  ngOnInit(): void {
  }

}
