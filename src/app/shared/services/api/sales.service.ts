import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRequestService } from './api-request.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  constructor(
    private apiRequest: ApiRequestService,
  ) {}

  postSaleOrder(postBody: any):Observable<any> {
     return this.apiRequest.post(`api/salesorders`, postBody);
  }

  getSalesOrderList(status:string = null): Observable<any> {
    let value = 'api/salesorders';
    if (status) {
      value += `?status=${status}`;
    }
    return this.apiRequest.get(value);
  }

  getSalesOrderItem(soID): Observable<any> {
    return this.apiRequest.get('api/salesorders/'+soID);
  }

  updateSalesOrderItem(soID, postBody: any): Observable<any> {
    return this.apiRequest.put('api/salesorders/'+soID, postBody);
  }

  updateSalesOrderDetailItem(postBody: any): Observable<any> {
    return this.apiRequest.put('api/salesorderdetail', postBody);
  }


  deleteSalesOrderItem(ID): Observable<any> {
    return this.apiRequest.delete('api/salesorders/'+ID);
  }

}