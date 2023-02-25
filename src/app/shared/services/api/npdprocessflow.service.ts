import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Npdproject } from 'app/shared/models/npdproject.model';
import { Npdprocessflow } from 'app/shared/models/npdprocessflow.model';

@Injectable({
  providedIn: 'root'
})
export class NpdprocessflowService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}

    /**
     * Gets List of Project Records
     */
    getNpdprocessflowList(): Observable<any> {
      //Create Request URL params
      let me = this;
      let page= 0;
      let size = 5;
      let params: HttpParams = new HttpParams();
      params = params.append('page', typeof page === "number"? page.toString():"0");
      params = params.append('size', typeof size === "number"? size.toString():"1000");
      return this.apiRequest.get('api/npdprocessflows',params);

  }

    getNpdprocessflowDetailsByID(npdprojectid:number,phaseno: number):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
     // params = params.append('id', cid);
      
     // return this.apiRequest.get(`api/npdprocessflows/${cid}`, params);
      return this.apiRequest.get(`api/npdprocessflows/npdprojectid/${npdprojectid}/phaseno/${phaseno}`, params);

    }


    


    postNpdprocessflow(npdprocessflow: Npdprocessflow):Observable<any> {

      return this.apiRequest.post(`api/npdprocessflows`, npdprocessflow);
    }

    putNpdprocessflow(npdprocessflow: Npdprocessflow):Observable<any> {

      return this.apiRequest.put(`api/npdprocessflows/${npdprocessflow.id}`, npdprocessflow);
    }


    deleteNpdprojectByID(cid: number):Observable<any>{
      
      return this.apiRequest.delete(`api/npdprocessflows/${cid}`);
    }
 
}
