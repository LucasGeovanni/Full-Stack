import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Category } from 'src/app/models/Category';
import { RequestService } from 'src/app/services/request.service';
import { RequestTypeEnum } from 'src/app/enums/RequestTypeEnum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductDTO } from 'src/app/models/ProductDTO';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  public products: Product;
  public categories: Category;  
  public lastSaved;  
  public form: FormGroup;
  @Output() formLastSaved = new EventEmitter();
  
  constructor(private service: RequestService, public formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.initForm();
    this.findCategories();     
  }
  
  findCategories() {
    let url = "http://localhost:8080/products/categories";    
    return this.service.orderRequest(url, RequestTypeEnum.GET).subscribe((res: Category) =>{
      this.categories = res;
    }, err =>{
      console.log(err);
      this.categories = null;
      this.reloadAttemp();
    });
  }
  
  saveOrUpdate(){
    let product: ProductDTO = this.form.value;
    let url = "http://localhost:8080/products/save";
    this.service.orderRequest(url, RequestTypeEnum.POST, product).subscribe((res: any) =>{ 
      this.lastSaved = res.body;
      this.notifyChange();
      this.initForm();           
    }, err =>{
      console.log(err);
    });    
  }  
  
  notifyChange(){
    this.formLastSaved.emit({lastSaved: this.lastSaved, date: new Date()});
  }
  
  @Input()
  set update(product: Product){
    if(product){
      this.form.setValue({ 
        id: product.id,
        name: product.name,
        price: product.price,
        categoryId: product.category.id
      });      
      return;
    }      
  }
  
  initForm(){
    return this.form = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      categoryId: ['-1', this.validate],
      price: ['' ,Validators.required],
    });
  }  
  validate(control){
    if(control.value != -1){
      return null;
    }
    return { 'required': true };
  }
  
  get f() {   
    return this.form.controls; 
  }  

  reloadAttemp(){
    setTimeout(() => {
      this.findCategories();     
    }, 60000);
  }
}
