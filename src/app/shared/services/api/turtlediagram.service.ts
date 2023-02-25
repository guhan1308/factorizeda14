import { Injectable} from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TurtlediagramService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}


getDetails(processname:string,title:string, headerno:number):Observable<any>{

  let me = this;
  let page= 0;
  let size = 5;
  let params = new HttpParams();
 // params = params.append('id', cid);
  
  return this.apiRequest.get(`api/turtlediagrams/processname/${processname}/title/${title}/headerno/${headerno}`, params);

}


getTitles(processname:string){
  let me = this;
  let page= 0;
  let size = 5;
  let params = new HttpParams();
 // params = params.append('id', cid);
  
  return this.apiRequest.get(`api/turtlediagrams/processname/${processname}`, params);

}
}
