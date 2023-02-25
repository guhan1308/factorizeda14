import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Co05_productdimensionlistService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getCo05_productdimensionlists(): Observable<any> {
    return this.apiRequest.get(`api/co05_productdimensionlists`);
  }

  getCo05_productdimensionlistbyid(id :number): Observable<any> {
    return this.apiRequest.get(`api/co05_productdimensionlists/${id}`);
  }

  postCo05_productdimensionlist(payload): Observable<any> {
    return this.apiRequest.post(`api/co05_productdimensionlists`, payload);
  }

  putCo05_productdimensionlist(co05_productdimensionlist): Observable<any> {
    return this.apiRequest.put(`api/co05_productdimensionlists/${co05_productdimensionlist.id}`, co05_productdimensionlist);
  }

  deleteCo05_productdimensionlist(id): Observable<any> {
    return this.apiRequest.delete(`api/co05_productdimensionlists/${id}`);
  }


}
