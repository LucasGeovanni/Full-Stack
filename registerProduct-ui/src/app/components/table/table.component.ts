import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product';
import { Category } from '../../models/Category';
import { RequestService } from '../../services/request.service';
import { RequestTypeEnum } from '../../enums/RequestTypeEnum';
import { Saved } from '../../models/saved';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public products: Product = null;
  public categories: Category;
  public lastSaved;  
  @Output() updateProduct = new EventEmitter();
  @Output() deleteProduct = new EventEmitter();
  
  constructor(private service: RequestService) { }
  
  ngOnInit() {
    this.findAllProducts();       
  }
  
  findAllProducts(){    
    let url = "http://localhost:8080/products/all";
    return this.service.orderRequest(url, RequestTypeEnum.GET).subscribe((res: Product) => {      
      this.products = res;
    }, err => {
      console.log(err); 
      this.reloadAttemp();
    });
  }
  
  update(product: Product){    
    this.updateProduct.emit(product);
  }
  
  delete(item){
    this.deleteProduct.emit(item);
  }
  
  @Input() 
  set reload(saved: Saved){   
    this.findAllProducts();   
    this.lastSaved = saved.lastSaved;
  }
  
  reloadAttemp(){
    setTimeout(() => {
      this.findAllProducts(); 
    }, 60000);
  }
  
}
