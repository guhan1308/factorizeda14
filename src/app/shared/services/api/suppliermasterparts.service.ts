import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuppliermasterpartService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getSuppliermasterparts(): Observable<any> {
    return this.apiRequest.get(`api/suppliermasterparts`);
  }

  getSuppliermasterpartbyid(id :number): Observable<any> {
    return this.apiRequest.get(`api/suppliermasterparts/${id}`);
  }

  postSuppliermasterpart(payload): Observable<any> {
    return this.apiRequest.post(`api/suppliermasterparts`, payload);
  }

  updateSupplieroutstanding(payload): Observable<any> {
    return this.apiRequest.put(`api/suppliermasterparts/updateoutstanding/${payload.suppliercode}`, payload);
  }

  
  putSuppliermasterpart(suppliermasterpart): Observable<any> {
    return this.apiRequest.put(`api/suppliermasterparts/${suppliermasterpart.id}`, suppliermasterpart);
  }

  deleteSuppliermasterpart(id): Observable<any> {
    return this.apiRequest.delete(`api/suppliermasterparts/${id}`);
  }


}
