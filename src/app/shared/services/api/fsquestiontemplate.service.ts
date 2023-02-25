import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';
import { Fsquestiontemplate } from 'app/shared/models/fsquestiontemplate.model';

@Injectable({
  providedIn: 'root'
})
export class FsquestiontemplateService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getFsquestiontemplate(): Observable<any> {
    return this.apiRequest.get(`api/fsquestiontemplates`);
  }

  getFsquestiontemplatebyid(id: number): Observable<any> {
    return this.apiRequest.get(`api/fsquestiontemplates/${id}`);
  }

  postFsquestiontemplate(fsquestiontemplate : Fsquestiontemplate): Observable<any> {
    return this.apiRequest.post(`api/fsquestiontemplates`, fsquestiontemplate);
  }

  putFsquestiontemplate(fsquestiontemplate : Fsquestiontemplate): Observable<any> {
    return this.apiRequest.put(`api/fsquestiontemplates/${fsquestiontemplate.id}`, fsquestiontemplate);
  }

  deleteFsquestiontemplate(id : number): Observable<any> {
    return this.apiRequest.delete(`api/fsquestiontemplates/${id}`);
  }


}
