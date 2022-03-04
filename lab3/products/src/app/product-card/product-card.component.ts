import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() productImage: any;
  @Input() productName: any;
  @Input() productCategory: any;
  @Input() productPrice: any;
  @Input() productCount: any ;





  constructor() { }

  ngOnInit(): void {
  }

}
