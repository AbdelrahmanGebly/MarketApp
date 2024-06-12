import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl:string = 'https://fakestoreapi.com/';
  constructor(private _HttpClient:HttpClient) { }

  getAllProducts(){
    return this._HttpClient.get(this.baseUrl + 'products')
  }
  getAllCategories(){
    return this._HttpClient.get(this.baseUrl + 'products/categories')
  }

  getSpecificProduct(event:any){
    return this._HttpClient.get(this.baseUrl + `products/category/${event}`);
  }

  getSingleProductById(id:any){
    return this._HttpClient.get(this.baseUrl + `products/${id}`);
  }


}
