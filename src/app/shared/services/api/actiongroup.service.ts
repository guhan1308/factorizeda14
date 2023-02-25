import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { ActionGroup } from 'app/shared/models/actiongroup.model';

@Injectable({
  providedIn: 'root'
})
export class ActiongroupService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}

    /**
     * Gets List of Company Records
     */
    getGroupsList(): Observable<any> {
      //Create Request URL params
      let me = this;
      let page= 0;
      let size = 5;
      let params: HttpParams = new HttpParams();
      params = params.append('page', typeof page === "number"? page.toString():"0");
      params = params.append('size', typeof size === "number"? size.toString():"1000");
      return this.apiRequest.get('api/actiongroups',params);

  }

    getGroupUserListByID(cid: number):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
     // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/actiongroupdetails/groupid/${cid}`, params);
    }


    getGroupUserListByName(cname: string):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
     // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/actiongroupdetails/groupname/${cname}`, params);
    }

    postActionGroup(actiongroup: ActionGroup):Observable<any> {

      return this.apiRequest.post(`api/actiongroups`, actiongroup);
    }

    putActionGroup(actiongroup: ActionGroup):Observable<any> {

      return this.apiRequest.put(`api/actiongroups/${actiongroup.id}`, actiongroup);
    }


    deleteActionGroupByID(cid: number):Observable<any>{
      
      return this.apiRequest.delete(`api/actiongroups/${cid}`);
    }


}
