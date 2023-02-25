import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
  ) {}


  getProductList():Observable<any>{
    let me = this;
    let page= 0;
    let size = 5;
    let params = new HttpParams();
    //params = params.append('id', cid);
    return this.apiRequest.get(`api/products`, params);
  }

  getPartDetailsByName(partname: string):Observable<any>{
    let me = this;
    let page= 0;
    let size = 5;
    let params = new HttpParams();
    //params = params.append('id', cid);
    return this.apiRequest.get(`api/products/partname/${partname}`, params);
  }

  getPartDetailsById(cid: number):Observable<any>{
    let me = this;
    let page= 0;
    let size = 5;
    let params = new HttpParams();
    // params = params.append('id', cid);
    return this.apiRequest.get(`api/products/${cid}`, params);
  }

  getApqpDetailsByPartId(cid: number):Observable<any>{
    let me = this;
    let page= 0;
    let size = 5;
    let params = new HttpParams();
    // params = params.append('id', cid);
    return this.apiRequest.get(`api/productsapqp/partid/${cid}`, params);
  }

  getPFDCPDetailsByPartId(cid: number):Observable<any>{
    let me = this;
    let page= 0;
    let size = 5;
    let params = new HttpParams();
    // params = params.append('id', cid);
    return this.apiRequest.get(`api/pfdcps/partid/${cid}`, params);
  }
  getPFDCPDetailsByPartNo(partno:string):Observable<any>{
    let me = this;
    let page= 0;
    let size = 5;
    let params = new HttpParams();
    // params = params.append('id', cid);
    return this.apiRequest.get(`api/pfdcps/partno/${partno}`, params);
  }

  getPFDCPDetailsByOwnerAndPartNo(owner:string,partno:string):Observable<any>{
    let me = this;
    let page= 0;
    let size = 5;
    let params = new HttpParams();
    // params = params.append('id', cid);
    return this.apiRequest.get(`api/pfdcps/owner/${owner}/partno/${partno}`, params);
  }


  postProdConsumables(postBody: any):Observable<any> {
     return this.apiRequest.post('api/productconsumable', postBody);
  }

  getProdConsumableList(): Observable<any> {
    return this.apiRequest.get('api/productconsumables');
  }

  getProdConsumableDetail(ID): Observable<any> {
    return this.apiRequest.get('api/productconsumable/'+ID);
  }

  updateProdConsumable(ID, postBody: any): Observable<any> {
    return this.apiRequest.put('api/productconsumable/'+ID, postBody);
  }

  deleteProdConsumable(ID): Observable<any> {
    return this.apiRequest.delete('api/productconsumable/'+ID);
  }

}
