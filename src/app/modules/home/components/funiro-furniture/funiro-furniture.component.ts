import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funiro-furniture',
  templateUrl: './funiro-furniture.component.html',
  styleUrls: ['./funiro-furniture.component.css'],
})
export class FuniroFurnitureComponent implements OnInit {
  data: Product[] = [];
  /**
   *
   */
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.LoadDAta();
  }

  LoadDAta() {
    this.http.get('https://localhost:7032/api/Products').subscribe({
      next: (value: any) => {
        this.data = value;
        console.log(this.data);
        
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
export interface Product{
  name:string,
  id:number,
  description:string,
  categoryId:string,
  category:string
}
