import { HomePage } from './../home/home';
import { RestProvider } from './../../providers/rest/rest';
import { Product } from './../../model/product';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  product:Product

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private rest:RestProvider, private toastCtrl: ToastController) {
    this.product =  new Product(this.navParams.get('product'));
  }

  saveProduct(product:Product){
    if (product.id){
      this.rest.updateProduct(product).subscribe((product)=>{
        this.product = product;
        this.showSuccessMessage("Product " + product.name + " updated")
        this.navCtrl.setRoot(HomePage);
      })
    }else{
      this.rest.createProduct(product).subscribe((product)=>{
        this.product = product;
        this.showSuccessMessage("Product "+ product.id + " - " + product.name + " created")
        this.navCtrl.setRoot(HomePage);
      })
    }
    
  }
  deleteProduct(productId:number){
    this.rest.deleteProductById(productId).subscribe((product)=>{
      console.log(product)
      this.showSuccessMessage("Product Id "+ productId + " has been removed!");
      this.navCtrl.setRoot(HomePage);
    })
  }

  showSuccessMessage(message:string){
    this.toastCtrl.create({
      message: message,
      showCloseButton: true,
      duration:3000,
      position:'middle'
    }).present();
  }

}
