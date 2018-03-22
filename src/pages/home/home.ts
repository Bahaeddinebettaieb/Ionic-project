import { Observable } from 'rxjs/Observable';
import { ProductPage } from './../product/product';
import { Product } from './../../model/product';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  productsObservable:Observable<Product[]>;

  constructor(public navCtrl: NavController, private rest:RestProvider) {
    
  }

  navToDetail(product:Product){
    this.navCtrl.push(ProductPage, {"product": product});
  }
  
  createProduct(){
    this.navCtrl.push(ProductPage, {"product": {}});
  }

  ionViewDidLoad(){
    this.productsObservable = this.rest.getProducts();
  }

}
