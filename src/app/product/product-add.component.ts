import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from './product.service';
import { Product } from './product';
import { Router } from '@angular/router';



@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  newProduct: Product;
  productForm: FormGroup;
  errorMessage = '';
  fileToUpload: File = null;

  constructor( private fb: FormBuilder, private productService: ProductService, private router: Router ) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      productName : ['llll'] ,
      productCode : [''],
      price: '',
      imageUrl: '',
    });
  }
  save(): void {
    const product = {...this.newProduct, ...this.productForm.value};
    this.productService.addProduct(product)
    .subscribe({
      next: () => this.onSaveComplete(),
      error: err => this.errorMessage = err
    });
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.productForm.reset();
    this.router.navigate(['/product']);
  }

}
