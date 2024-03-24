import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funiro-furniture',
  templateUrl: './funiro-furniture.component.html',
  styleUrls: ['./funiro-furniture.component.css'],
})
export class FuniroFurnitureComponent implements OnInit {

  /**
   *
   */
  constructor(private http: HttpClient) {}
  ngOnInit(): void {

  }

  
}

