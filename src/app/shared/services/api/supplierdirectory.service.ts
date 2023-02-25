import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Supplierdirectory } from 'app/shared/models/Supplierdirectory.model';
import { Supplierdirectorypart } from 'app/shared/models/supplierdirectorypart.model';
import { Observable } from 'rxjs';
import { ApiRequestService } from './api-request.service';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SupplierdirectoryService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }

  
  getSupplierdirectory(): Observable<any> {
    return this.apiRequest.get(`api/supplierdirectory`);
  }

  getSupplierdirectorybyid(id:number): Observable<any> {

    return this.apiRequest.get(`api/supplierdirectory/${id}`);
  }

  postSupplierdirectory(supplierdirectory : Supplierdirectory): Observable<any> {
    return this.apiRequest.post('api/supplierdirectory' , supplierdirectory);
  }

  createSupplierMaster(id:number , user : string): Observable<any> {
    let params: HttpParams = new HttpParams();
   params = params.append('user', user);
    return this.apiRequest.get(`api/supplierdirectory/tosuppliermaster/${id}` , params);
  }

  putSupplierdirectory(supplierdirectory: Supplierdirectory): Observable<any> {

    return this.apiRequest.put(`api/supplierdirectory/${supplierdirectory.id}`, supplierdirectory);
  }

  postPart(supplierPart : Supplierdirectorypart): Observable<any> {
    return this.apiRequest.post('api/supplierdirectory/parts' , supplierPart);
  }


  deleteSupplierdirectorypart(id:number): Observable<any> {

    return this.apiRequest.delete(`api/supplierdirectory/parts/${id}`);
  }
}
