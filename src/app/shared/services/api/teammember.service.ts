import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

import { Teammember } from 'app/shared/models/teammember.model';

@Injectable({
  providedIn: 'root'
})
export class TeammembersService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getTeammembers(): Observable<any> {
    return this.apiRequest.get(`api/teammembers`);
  }

  getTeammembersbyid(id: number): Observable<any> {
    return this.apiRequest.get(`api/teammembers/${id}`);
  }

  postTeammembers(payload : Teammember): Observable<any> {
    return this.apiRequest.post(`api/teammembers`, payload);
  }

  putTeammembers(teammaster : Teammember ): Observable<any> {
    return this.apiRequest.put(`api/teammembers/${teammaster.id}`, teammaster);
  }

  deleteTeammembers(id : number): Observable<any> {
    return this.apiRequest.delete(`api/teammembers/${id}`);
  }


}
