import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RmledgerService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getRmledgers(): Observable<any> {
    return this.apiRequest.get(`api/rmledgers`);
  }


}
