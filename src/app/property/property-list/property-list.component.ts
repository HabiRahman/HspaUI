import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor() { }
  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Birla",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 2,
      "Name": "Sachin",
      "Type": "Home",
      "Price": 5000
    },
    {
      "Id": 3,
      "Name": "Virat",
      "Type": "Home",
      "Price": 9000
    },
    {
      "Id": 4,
      "Name": "Vvs",
      "Type": "House",
      "Price": 3000
    },
    {
      "Id": 5,
      "Name": "Dravid",
      "Type": "House",
      "Price": 7890
    },
    {
      "Id": 6,
      "Name": "Shewag",
      "Type": "House",
      "Price": 4900
    },
  ];

  ngOnInit() {

  }

}
