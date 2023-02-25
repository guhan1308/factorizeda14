import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Suppliermaster } from 'app/shared/models/Suppliermaster.model';
import { SupplierCertificate } from 'app/shared/models/suppliercertificate.model';
import { Observable } from 'rxjs';
import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }

  
  getSupplier(): Observable<any> {
    return this.apiRequest.get(`api/suppliermasters`);
  }

  getSupplierbyid(id:number): Observable<any> {

    return this.apiRequest.get(`api/suppliermasters/${id}`);
  }

  postSupplier(supplier : Suppliermaster): Observable<any> {
    return this.apiRequest.post('api/suppliermasters' , supplier);
  }

  putSupplier(supplier: Suppliermaster): Observable<any> {

    return this.apiRequest.put(`api/suppliermasters/${supplier.id}`, supplier);
  }

  postCertificate(supplierCertificate : SupplierCertificate): Observable<any> {
    return this.apiRequest.post('api/suppliermasters/certificates' , supplierCertificate);
  }


  deleteSupplierCertificate(id:number): Observable<any> {

    return this.apiRequest.delete(`api/suppliermasters/certificates/${id}`);
  }
}
