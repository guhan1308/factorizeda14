import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyprofileService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getCompanyprofile(): Observable<any> {
    return this.apiRequest.get(`api/company`);
  }

  getCompanyprofilebyid(id :number): Observable<any> {
    return this.apiRequest.get(`api/company/${id}`);
  }

  postCompanyprofile(payload): Observable<any> {
    return this.apiRequest.post(`api/company`, payload);
  }

  putCompanyprofile(sqaanswer): Observable<any> {
    return this.apiRequest.put(`api/company/${sqaanswer.id}`, sqaanswer);
  }

  deleteCompanyprofile(id): Observable<any> {
    return this.apiRequest.delete(`api/company/${id}`);
  }


}
