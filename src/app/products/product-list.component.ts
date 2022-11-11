import {Component, OnInit} from '@angular/core';
import { ProductInterface } from './product';
import { ProductService } from './product.service';

@Component({
    // selector: 'pm-products' ,
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;
    //listFilter: string = "cart";

    _listFilter: string;
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    filteredProducts: ProductInterface[] = [];
    products: ProductInterface[] = [];  //pehla ahiya hardcoded data add krta hata but eni jagya e have service inject kravsu constructor ma


    constructor(private _productService: ProductService){
        //this.filteredProducts = this.products; 
        /* because constructor ngOnit() ni pehla che, aa loc empty lis of products aapse
        etle ene ngOnit() ni method ma initialize kri devanu.*/
    }

    ngOnInit():void{        //lifecycle hook
        // console.log('In OnInit');
        this._productService.getProducts()
                    .subscribe(products => {
                            
                        this.products = products;
                        this.filteredProducts = this.products;
                        },  //aane upar lakhsu toh again the filtered list would be empty
                        error => this.errorMessage = <any>error);
        
    }

    toggleImage():void{
        this.showImage = !this.showImage;
    }

    
    onRatingClicked(message: string){
        this.pageTitle = 'Product List: '+message;
    }

    performFilter(filterBy: string): ProductInterface[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: ProductInterface)=>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
        )
    }
}