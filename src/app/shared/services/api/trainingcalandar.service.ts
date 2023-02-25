import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Trainingcalandar, Trainees } from 'app/shared/models/trainingcalandar.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingcalandarService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}


    /**
     * Gets List of Company Records
     */
    getTrainingCalandarList(): Observable<any> {
      //Create Request URL params
      let me = this;
      let page= 0;
      let size = 5;
      let params: HttpParams = new HttpParams();
      params = params.append('page', typeof page === "number"? page.toString():"0");
      params = params.append('size', typeof size === "number"? size.toString():"1000");
      return this.apiRequest.get('api/trainingcalandars',params);

  }

    getTrainingCalandarDetailsByID(cid: number):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
     // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/trainingcalandars/${cid}`, params);
    }


    postTrainingcalanadar(trainingcalandar: Trainingcalandar):Observable<any> {

      return this.apiRequest.post(`api/trainingcalandars`, trainingcalandar);
    }

    putTrainingcalanadar(trainingcalandar: Trainingcalandar):Observable<any> {

      return this.apiRequest.put(`api/trainingcalandars/${trainingcalandar.id}`, trainingcalandar);
    }


    deleteTrainingcalanadarByID(cid: number):Observable<any>{
      
      return this.apiRequest.delete(`api/trainingcalandars/${cid}`);
    }

    postTrainees(trainees: Trainees):Observable<any> {
      
      return this.apiRequest.post(`api/employeetrainings`, trainees);

    }

    putTrainees(trainees: Trainees):Observable<any> {

      return this.apiRequest.put(`api/employeetrainings/${trainees.id}`, trainees);
    }

    deleteTraineesByID(cid: number):Observable<any>{
      
      return this.apiRequest.delete(`api/employeetrainings/${cid}`);
    }
}
