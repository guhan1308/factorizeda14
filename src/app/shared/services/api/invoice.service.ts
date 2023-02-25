import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { HttpParams } from '@angular/common/http';
import { Invoice } from 'app/shared/models/invoice';
import { InvoiceDetail } from 'app/shared/models/invoicedetail';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}
    /**
     * Gets List of Company Records
     */
    getInvoiceList(): Observable<any> {
      //Create Request URL params
      let me = this;
      let page= 0;
      let size = 5;
      let params: HttpParams = new HttpParams();
      params = params.append('page', typeof page === "number"? page.toString():"0");
      params = params.append('size', typeof size === "number"? size.toString():"1000");
      return this.apiRequest.get('api/invoices',params);

  }
  
  getInvoiceByID(cid: number):Observable<any>{
    let me = this;
    let page= 0;
    let size = 5;
    let params = new HttpParams();
   // params = params.append('id', cid);
    
    return this.apiRequest.get(`api/invoices/${cid}`, params);
  }

  postInvoice(invoice: Invoice):Observable<any> {
    return this.apiRequest.post(`api/invoices`, invoice);
  }

  postInvoiceDetails(invoice: Invoice, invoiceDetail: InvoiceDetail) {
    return this.apiRequest.post(`api/invoicedetails/${invoice.id}`, invoiceDetail);    
  }

  putInvoice(invoice: Invoice):Observable<any> {
    console.log(invoice);
    return this.apiRequest.put(`api/invoices/${invoice.id}`, invoice);
  }


  deleteInvoice(cid: number):Observable<any>{    
    return this.apiRequest.delete(`api/invoices/${cid}`);
  }

  deleteInvoiceDetails(cid: number):Observable<any>{    
    return this.apiRequest.delete(`api/invoicedetails/${cid}`);
  }

  generateInvoice(payload: any): Observable<any> {   
    return this.apiRequest.post(`api/generateInvoice`, payload);
  }

  getPendingInvoices(): Observable<any> {   
    return this.apiRequest.get(`api/pendingInvoices`);
  }

  getPaymentDetails(invoice): Observable<any> {
    return this.apiRequest.get(`api/payment/${invoice}`);
  }

  createPayment(payment) {
    return this.apiRequest.post(`api/payment/`, payment);    
  }
  
}