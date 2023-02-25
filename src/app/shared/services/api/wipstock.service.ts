import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { WIPStock } from 'app/shared/models/wipstock.model';

@Injectable({
  providedIn: 'root'
})
export class WIPStockService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}

    /**
     * Gets List of WIPStock Records
     */
    getWIPStockList(): Observable<any> {
      //Create Request URL params
      let me = this;
      let page= 0;
      let size = 5;
      let params: HttpParams = new HttpParams();
      params = params.append('page', typeof page === "number"? page.toString():"0");
      params = params.append('size', typeof size === "number"? size.toString():"1000");
      return this.apiRequest.get('api/wipstock',params);

  }

    getWIPStockById(cid: number):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
    // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/wipstock/${cid}`, params);
    }

    getWIPStockByPartNoAndJobName(partno: string,jobname: string):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
    // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/wipstock/partno/${partno}/jobname/${jobname}`, params);

    }

    getWIPStockByPartIdAndJobName(partid: number,jobname: string):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
    // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/wipstock/partid/${partid}/jobname/${jobname}`, params);

    }


  postWIPStock(wipstock: WIPStock):Observable<any> {

      return this.apiRequest.post(`api/wipstock`, wipstock);
    }

  putWIPStock(wipstock: WIPStock):Observable<any> {

      return this.apiRequest.put(`api/wipstock/${wipstock.id}`, wipstock);
    }


  deleteWIPStockByID(cid: number):Observable<any>{
      
      return this.apiRequest.delete(`api/wipstock/${cid}`);
    }
}
