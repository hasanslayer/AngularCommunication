import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
    templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit {
    pageTitle: string = 'Products';
    monthCount: number;

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.productService.selectedProductChanges$.subscribe(selectedProduct => {
            if (selectedProduct) {
                const start = new Date(selectedProduct.releaseDate);
                const now = new Date();
                this.monthCount = now.getMonth() - start.getMonth() + (12 * (now.getFullYear() - start.getFullYear()));
            } else {
                this.monthCount = 0;
            }
        })
    }

}
