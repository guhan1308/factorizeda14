import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private apiRequest: ApiRequestService
  ) {}
    customerData:any;
    postSurvey(payload:any):Observable<any> {
      return this.apiRequest.post('api/customerSuvey', payload);
    }

    getCustomerSurvey(custID:any):Observable<any> {
      return this.apiRequest.get('api/customerSuvey/'+custID);
    }

    postCustomer(payload): Observable<any> {
      return this.apiRequest.post('api/customer', payload);
    }

    updateCustomer(custID, payload): Observable<any> {
      return this.apiRequest.put('api/customer/'+custID, payload);
    }

    getCustomerList(): Observable<any> {
      return this.apiRequest.get('api/customers');
    }

    getCustomerDetail(custID):Observable<any> {
      return this.apiRequest.get('api/customer/'+custID);
    }

    setCustomerData(value) {
      this.customerData = value;
    }

    getCustomerData() {
      return this.customerData;
    }

}
