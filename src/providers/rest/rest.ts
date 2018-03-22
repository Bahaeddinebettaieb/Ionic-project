import { Product } from './../../model/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'


@Injectable()
export class RestProvider {

  baseUrl:string = "http://localhost:3000";

  constructor(public http: HttpClient) {
    console.log('RestProvider constructor');
  }

  public getProducts():Observable<Product[]>{
    return this.http.get(this.baseUrl + "/products")
        .map((products:Product[]) => {
          console.log(products);
          return  products.map(product=>{ return new Product(product)});
        }).catch((err)=>{
          console.error(err)
          return Observable.empty<Product[]>();
        });
  }

  public createProduct(product:Product): Observable<Product>{
    return this.http.post(this.baseUrl + "/products", product)
        .map(response => {
          return new Product(response)
        }).catch((err)=>{
          console.error(err);
          return Observable.empty<Product>();
        })
  }

  public getProductById(productId:number): Observable<Product>{
    return this.http.get(this.baseUrl + "/products/"+ productId)
        .map(p=>{
          return new Product(p);
        }).catch((err)=>{
          console.error(err);
          return Observable.throw(err.message)
        })
  }

  public updateProduct(product:Product): Observable<Product>{
    return this.http.put(this.baseUrl + "/products/"+product.id, product)
      .map(resp=>{
        return new Product(resp);
      }).catch((err)=>{
        console.error(err);   
        return Observable.empty<Product>();
      })
  }

  public deleteProductById(productId:number): Observable<Product>{
    return this.http.delete(this.baseUrl + "/products/" +  productId)
      .map(resp=>{
        return new Product(resp)
      }).catch((err)=>{
        console.error(err);
        return Observable.empty<Product>();
      })
  }

}
