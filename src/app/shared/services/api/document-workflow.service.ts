import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { DocumentWorkflow } from 'app/shared/models/documentworkflow.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentWorkflowService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}

    /**
     * Gets List of Project Records
     */
    getDocumentWorkflowList(): Observable<any> {
      //Create Request URL params
      let me = this;
      let page= 0;
      let size = 5;
      let params: HttpParams = new HttpParams();
      params = params.append('page', typeof page === "number"? page.toString():"0");
      params = params.append('size', typeof size === "number"? size.toString():"1000");
      return this.apiRequest.get('api/documentworkflows',params);

  }

   getDocumentWorkflowListByProcessName(processname:string):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
      return this.apiRequest.get(`api/documentworkflows/processname/${processname}`, params);

    }


    


    postDocumentWorkflow(documentworkflow: DocumentWorkflow):Observable<any> {

      return this.apiRequest.post(`api/documentworkflows`, documentworkflow);
    }

    putDocumentWorkflow(documentworkflow: DocumentWorkflow):Observable<any> {

      return this.apiRequest.put(`api/documentworkflows/${documentworkflow.id}`, documentworkflow);
    }


    deleteDocumentWorkflowByID(cid: number):Observable<any>{
      
      return this.apiRequest.delete(`api/documentworkflows/${cid}`);
    }
 
}
