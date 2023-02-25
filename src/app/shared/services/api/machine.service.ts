import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
  ) {}

  postMachine(payload): Observable<any> {
    return this.apiRequest.post('api/machine', payload);
  }

  updateMachine(id, payload): Observable<any> {
    return this.apiRequest.put('api/machine/'+id, payload);
  }

  getMachinesList(): Observable<any> {
    return this.apiRequest.get('api/machines');
  }

  getMachineDetail(id):Observable<any> {
    return this.apiRequest.get('api/machine/'+id);
  }

  fetchImage(path):Observable<any> {
    return this.apiRequest.fetchImage(path);
  }

}
