import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of sales peerson objects

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Boris", "Medvedev", "boris@sales.com", 8000),
    new SalesPerson("Michael", "Clayton", "clayton@sales.com", 4000),
    new SalesPerson("Harris", "Moore", "harris@sales.com", 7000),
    new SalesPerson("Trevor", "Jackson", "trevor@sales.com", 6000),
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
