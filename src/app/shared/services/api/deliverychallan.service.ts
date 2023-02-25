import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ApiRequestService } from './api-request.service';

import { Deliverychallan } from 'app/shared/models/deliverychallan.model';
@Injectable({
  providedIn: 'root'
})
export class DeliverychallanService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate: TranslateService
  ) { }


  getDeliverychallan(): Observable<any> {
    return this.apiRequest.get(`api/deliverychallans`);
  }

  getDeliverychallanbyId(id): Observable<any> {
    return this.apiRequest.get(`api/deliverychallans/${id}`);
  }

  postDeliverychallan(Deliverychallan: Deliverychallan): Observable<any> {
    return this.apiRequest.post(`api/deliverychallans`, Deliverychallan);
  }


  putDeliverychallan(Deliverychallan: Deliverychallan): Observable<any> {
    return this.apiRequest.put(`api/deliverychallans/${Deliverychallan.id}`, Deliverychallan);
  }

  deleteDeliverychallanbyId(cid: number): Observable<any> {
    return this.apiRequest.delete(`api/deliverychallans/${cid}`);
  }

}
