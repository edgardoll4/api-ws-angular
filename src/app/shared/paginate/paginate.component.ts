import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {
  page = 1;
  constructor() { }

  ngOnInit(): void {
  }

}

