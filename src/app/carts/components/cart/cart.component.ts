import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  constructor(){}

  ngOnInit(): void {
    this.getCartProducts();
    this.getTotalPrice();
  }

  cartProducts:any[] = [];
  totalPrice:number = 0;

  getCartProducts(){
    if('cart' in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
  }

  getTotalPrice(){
    this.totalPrice = 0;
    for(let i = 0 ; i< this.cartProducts.length; i++){
      this.totalPrice += (this.cartProducts[i].item.price * this.cartProducts[i].quantity)
    }
  }

  decreaseAmount(index:number){
    this.cartProducts[index].quantity --;
    this.getTotalPrice();
    localStorage.setItem('cart' , JSON.stringify(this.cartProducts));
  }

  increaseAmount(index:number){
    this.cartProducts[index].quantity ++;
    this.getTotalPrice();
    localStorage.setItem('cart' , JSON.stringify(this.cartProducts));
  }

  detectChange(){
    localStorage.setItem('cart' , JSON.stringify(this.cartProducts));
    this.getTotalPrice();
  }

  deleteProduct(index:number){
    this.cartProducts.splice(index,1);
    localStorage.setItem('cart' , JSON.stringify(this.cartProducts));
    this.getTotalPrice();
  }

  deleteCartProducts(){
    this.cartProducts = [];
    localStorage.setItem('cart' , JSON.stringify(this.cartProducts));
  }
}
