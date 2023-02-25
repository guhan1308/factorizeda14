import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { EnquiryQuote } from 'app/shared/models/enquiryquote.model';

@Injectable({
  providedIn: 'root'
})
export class EnquiryquotesService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}


    postEnquiryquote(enquiryquotes: EnquiryQuote):Observable<any> {

      return this.apiRequest.post(`api/enquiryquotes`, enquiryquotes);
    }

    putEnquiryquote(enquiryquotes: EnquiryQuote):Observable<any> {

      return this.apiRequest.put(`api/enquiryquotes/${enquiryquotes.id}`, enquiryquotes);
    }


    deleteEnquiryquoteByID(cid: number):Observable<any>{
      
      return this.apiRequest.delete(`api/enquiryquotes/${cid}`);
    }

}
