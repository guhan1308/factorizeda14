import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';
import { Teammaster } from 'app/shared/models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeammastersService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getTeammasters(): Observable<any> {
    return this.apiRequest.get(`api/teams`);
  }

  getTeammastersbyid(id: number): Observable<any> {
    return this.apiRequest.get(`api/teams/${id}`);
  }

  postTeammasters(payload : Teammaster): Observable<any> {
    return this.apiRequest.post(`api/teams`, payload);
  }

  putTeammasters(teammaster : Teammaster ): Observable<any> {
    return this.apiRequest.put(`api/teams/${teammaster.id}`, teammaster);
  }

  deleteTeammasters(id : number): Observable<any> {
    return this.apiRequest.delete(`api/teams/${id}`);
  }


}
