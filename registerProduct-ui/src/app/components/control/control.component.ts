import { Component } from '@angular/core';
import { Product } from '../../models/Product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/model.component';
import { Saved } from '../../models/saved';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {
  public update: Saved = { lastSaved: 0, date: new Date() };
  public product: Product = null;
  public productDelete: Product = null;
  
  constructor(private modalService: NgbModal) {}
  
  formChange(saved: Saved) {
    this.update = saved;
  }
  updateProduct(product){
    this.product = product;
  }  
  deleteProduct(product){
    this.productDelete = product;
    this.openModal();
  }
  private openModal(){
    const modal = this.modalService.open(ModalComponent);
    modal.componentInstance.delete = this.productDelete; 
    modal.result.then((result) => {
    }, (reason) => {
      if(reason == 'deleted'){
        this.update = {lastSaved: 0, date: new Date()};
      }
    });
  } 
  
}
