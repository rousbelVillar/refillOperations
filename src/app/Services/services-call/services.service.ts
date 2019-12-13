import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { take, map, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  baseUrl = 'http://localhost:3800/api/';
  count = 0;
  constructor(private http: HttpClient) {
  }

  public getServicesParent(): Observable<any> {
    return this.http.get(this.baseUrl + 'getservicechild').pipe(
      take(1),
      map(data => {
        this.count++;
        return data;
      })
    );
  }
}
