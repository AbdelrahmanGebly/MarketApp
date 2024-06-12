import { ProductsService } from '../../services/products.service';
import { SharedInformationsService } from './../../../shared/services/shared-informations.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit{
  constructor(private _ProductsService:ProductsService){}

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  isloading:boolean = false;
  allProducts:any=[];
  allCategories:any=[];
  cartProducts:any = []

  getAllProducts() {
    this.isloading = true;
    this._ProductsService.getAllProducts().subscribe(
      (result)=>{
        this.allProducts = result;
        this.isloading = false
    },
    (error)=>{
      this.isloading = false
    }
  )
  }
  getAllCategories() {
    this.isloading = true;
    this._ProductsService.getAllCategories().subscribe(
      (result)=>{
        this.allCategories = result;
        this.isloading = false;
    },
    (error)=>{
      this.isloading = false
    }
  )
  }

  filterProducts(event:any){
    let value = event.target.value;
    (value == 'all')? this.getAllProducts() : this.getProductsByCategory(value);
  }

  getProductsByCategory(value:any){
    this.isloading = true;
    this._ProductsService.getSpecificProduct(value).subscribe(
      (response)=>{
        this.allProducts = response;
        this.isloading = false;
      },
      (error)=>{
        this.isloading = false
      }
    );
  }

  addToCart(event:any){
    if('cart' in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartProducts.find(function(item : any){
        return item.item.id == event.item.id;
      });
      console.log("this from All products!" , exist)
      if(exist) alert('Product is already in your cart');
      else{
        this.cartProducts.push(event);
        localStorage.setItem('cart' , JSON.stringify(this.cartProducts))
      }
    }else{
      this.cartProducts.push(event);
        localStorage.setItem('cart' , JSON.stringify(this.cartProducts))
    }
  }
}
