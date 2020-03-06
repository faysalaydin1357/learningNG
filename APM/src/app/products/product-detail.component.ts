import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {IProduct} from "./product";

@Component({
 //selector: 'pm-product-detail',  -> de selector is removed we use routing?
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
pageTitle : string ='product detail';
  product : IProduct;


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    //put here the right product from json
    this.product = {
      'productId': id,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0011',
      'releaseDate': '01-01-2020',
      'price':25345,
      'description':'sen bir baltasin',
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"

    }
  }
    onBack(): void {
      this.router.navigate(['/products']);

    }


}
