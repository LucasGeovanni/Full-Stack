import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestTypeEnum } from '../enums/RequestTypeEnum';

@Injectable()
export class RequestService  {
  
  constructor(private http: HttpClient) { }  
  
  private request(url: string, requestTypeEnum: RequestTypeEnum, params?: any){
    
    switch (requestTypeEnum) {
      
      case RequestTypeEnum.GET:
      return this.http.get(url);
      
      case RequestTypeEnum.POST:
      return this.http.post(url, params, {observe: 'response'},);
      
      case RequestTypeEnum.PUT:
      return this.http.put(url, params, {observe: 'response'});
      
      case RequestTypeEnum.DELETE:
      return this.http.delete(url);
    }
  }
  
  orderRequest(url: string, requestTypeEnum: RequestTypeEnum, params?: any){
    return this.request(url, requestTypeEnum, params);
  }
  
}
