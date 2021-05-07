import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// We need to import products from the /products folder in order to display the details.
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // We need to declare the product property in the class so we can have access to the items of the the products div from the
  // product-details.component.html
  product;
  /* . . . */
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

}