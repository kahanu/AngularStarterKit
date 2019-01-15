import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExceptionService {

  constructor() { }

  catchBadResponse: (errorResponse: any) => Observable<any> = (errorResponse: any) => {
    const res = <HttpErrorResponse>errorResponse;
    if (res.status === 404) {
      return Observable.throw('The web service was not found.');
    }

    return Observable.throw(res.statusText);
  }
}
