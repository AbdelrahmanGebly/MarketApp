import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  constructor(private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService){}
  id:any;
  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.paramMap.get('id');
    this.getSingleProduct();
  }
  product:any = {};
  isLoading:boolean = false;

  changeButtons:boolean=false;
  getSingleProduct(){
    this.isLoading = true;
    this._ProductsService.getSingleProductById(this.id).subscribe(
      (response)=>{
        this.product = response;
        this.isLoading = false;
      },
      (error)=>{
        console.log(error);
        this.isLoading = false
      }
    )
  }

}
