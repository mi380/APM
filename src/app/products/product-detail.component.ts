import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInterface } from './product';

@Component({
  // selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: ProductInterface;

  constructor(private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit(): void {
    let id = +Number(this._route.snapshot.paramMap.get('id'));
    this.pageTitle += `:${id}`;
    this.product = {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2021",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    }
  }

  onBack(){
    this._router.navigate(['/products']);
  }

}
