import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    // Reading Route Parameters using routerLink
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      // console.log(id);
      //API call
    });
  }
}
