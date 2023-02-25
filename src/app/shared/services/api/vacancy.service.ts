import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable, of } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Vacancy } from 'app/shared/models/vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  public responseCache = new Map();

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}

    /**
     * Gets List of Vacancy Records
     */
 getVacancyList(page?:number, pagesize?:number): Observable<any> {
      //Create Request URL params
      var URL;
      let me = this;
      let params: HttpParams = new HttpParams();

      if (page > 0)
        URL = `api/vacancies/page/${page}/pagesize/${pagesize}`;
      else
      URL = `api/vacancies`;

        const response = this.apiRequest.get(URL,params);
        console.log("Getting data from Backend ...");
        response.subscribe(vacancyList => this.responseCache.set(URL, vacancyList));
        return response; 

      
             
  //    return this.apiRequest.get('api/vacancies',params);

  }


  getCountAll(): Observable<any> {
    let params: HttpParams = new HttpParams();

    return this.apiRequest.get('api/vacancies/count',params);

  }

  getInitialVacancyList(): Observable<any> {
    //Create Request URL params
    var URL;
    let me = this;
    let params: HttpParams = new HttpParams();


    URL = `api/vacancies/first/100`;
    return this.apiRequest.get('api/vacancies/first/100',params);

/*
      const response = this.apiRequest.get(URL,params);
      console.log("Getting data from Backend ...");
      response.subscribe(vacancyList => this.responseCache.set(URL, vacancyList));
      return response; 

    */
           
//    return this.apiRequest.get('api/vacancies',params);

}


  getFullVacancyList(): Observable<any> {
    //Create Request URL params
    var URL;
    let me = this;
    let params: HttpParams = new HttpParams();


    URL = `api/vacancies`;

      const response = this.apiRequest.get(URL,params);
      console.log("Getting data from Backend ...");
      response.subscribe(vacancyList => this.responseCache.set(URL, vacancyList));
      return response; 

    
           
//    return this.apiRequest.get('api/vacancies',params);

}
   getVacancyDetailsByID(cid: number):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
     // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/vacancies/${cid}`, params);
    }

    getVacancyDetailsByTitle(cname: string):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
     // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/vacancies/?vacancytitle=${cname}`, params);
    }

    postVacancy(vacancy: Vacancy):Observable<any> {
      return this.apiRequest.post(`api/vacancies`, vacancy);
    }

    putVacancy(vacancy: Vacancy):Observable<any> {

      return this.apiRequest.put(`api/vacancies/${vacancy.id}`, vacancy);
    }


    deleteVacancyByID(cid: number):Observable<any>{
      
      return this.apiRequest.delete(`api/vacancies/${cid}`);
    }

    processFile():Observable<any>{
      //Create Request URL params

      let me = this;
      let page= 0;
      let size = 5;
      let params: HttpParams = new HttpParams();
      params = params.append('page', typeof page === "number"? page.toString():"0");
      params = params.append('size', typeof size === "number"? size.toString():"1000");
      return this.apiRequest.post('api/processfile',params);
    }


    getCountByMonth():Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
     // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/vacanciescountbymonth`, params);
    }


}
