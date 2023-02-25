import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest,  HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject} from 'rxjs';
import 'rxjs/add/operator/catch';
import { UserInfoService } from './user-info.service';
import { AppConfig } from 'app/app-config';
import { Company } from 'app/shared/models/company';
import { AuthService } from 'app/shared/auth/auth.service';
import { User } from 'app/shared/models';
import { Utility } from 'app/shared/utility/utility';


@Injectable()
export class ApiRequestService {
    public user : User;

    constructor(
        private appConfig:AppConfig,
        private http: HttpClient,
        private router:Router,
        private userInfoService:UserInfoService,
        private authService: AuthService
    ) {}

    /**
     * This is a Global place to add all the request headers for every REST calls
     */
     /**
     * This is a Global place to add all the request headers for every REST calls
     */
    private showSpinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    setSpinner(value){
        this.showSpinner.next(value);
    }

    getSpinner(): Observable<boolean>{
        return this.showSpinner;
    }


	getHeaders():HttpHeaders {
        let headers = new HttpHeaders();
       let token = this.userInfoService.getStoredToken();
     //   let token = this.authService.getToken();
       // console.log(localStorage.getItem('user'));

       this.user = this.authService.getuserValue();
       console.log(this.user.accessToken);
       let token1 = this.user.accessToken;

        headers = headers.append('Content-Type', 'application/json');
        if (token1 !== null) {
            headers = headers.append("x-access-token", token1);
        }
        return headers;
    }

      get(url:string, urlParams?:HttpParams):Observable<any>{
        let me = this;
        return this.http.get(this.appConfig.baseApiPath + url, {headers:this.getHeaders(),  params:urlParams} )
            .catch(function(error:any){
                console.log("Some error in catch" + error);
                if (error.status === 401 || error.status === 403){
                    me.router.navigate(['/logout']);
                }
                return Observable.throw(error || 'Server error')
            });
    }

    post(url:string, body?:Object):Observable<any>{
        let me = this;
        return this.http.post(this.appConfig.baseApiPath + url, JSON.stringify(body), { headers:this.getHeaders()})
            .catch(function(error:any){
                if (error.status === 401){
                    me.router.navigate(['/logout']);
                }
                return Observable.throw(error || 'Server error')
            });
    }

    put(url:string, body:Object):Observable<any>{
        let me = this;
        return this.http.put(this.appConfig.baseApiPath + url, JSON.stringify(body), { headers:this.getHeaders()})
            .catch(function(error:any){
                if (error.status === 401){
                    me.router.navigate(['/logout']);
                }
                return Observable.throw(error || 'Server error')
            });
    }

    delete(url:string):Observable<any>{
        let me = this;
        return this.http.delete(this.appConfig.baseApiPath + url, { headers:this.getHeaders()})
            .catch(function(error:any){
                if (error.status === 401){
                    me.router.navigate(['/logout']);
                }
                return Observable.throw(error || 'Server error')
            });
    }



    openFile(fname){
        //window.open(this.appConfig.baseApiPath + fname, '_blank');
        const {fileName, folderPath} = Utility.getFileNameFromFullPath(fname);
        let headers: HttpHeaders = this.getHeaders();
        headers = headers.append('filePath', folderPath);

        this.http.get(this.appConfig.baseApiPath + "api/files/"+ fileName , {headers, responseType : 'blob'}).subscribe(response => {
            let url = window.URL.createObjectURL(response);
            let a = document.createElement('a');
            document.body.appendChild(a);
            a.setAttribute('style', 'display: none');
            a.href = url;
            a.download = fileName;
            a.click();
            window.URL.revokeObjectURL(url);
            a.remove();
        })
    }
 

	getFilePath(fname){
        return this.appConfig.baseApiPath + "api/viewfiles/"+ fname;
        
        
    }

    fetchImage(path) {
        const fullPath = this.appConfig.baseApiPath + "api/fetchImage?path="+path;
        return this.http.get(fullPath, {headers:this.getHeaders()});
    }


}