import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product';
import { RequestService } from '../../services/request.service';
import { RequestTypeEnum } from '../../enums/RequestTypeEnum';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    providers: [NgbModalConfig, NgbModal]
})
export class ModalComponent {
    public product: Product;
    public modal;
    constructor(public service: RequestService, config: NgbModalConfig, private modalService: NgbModal){
        config.backdrop = 'static';
        config.keyboard = false;
    }
    
    @Input()
    set delete(product: Product){
        if(product){
            this.product = product;            
        }       
    }    
    
    close(action) {        
        this.modalService.dismissAll(action);        
    }
    
    deleteProduct(){
        let url ="http://localhost:8080/products/delete/" + this.product.id;
        this.service.orderRequest(url, RequestTypeEnum.DELETE).subscribe(resp=>{
            this.close('deleted');
        });
    }
}