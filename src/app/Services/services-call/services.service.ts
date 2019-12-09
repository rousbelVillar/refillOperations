import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { take, map, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  baseUrl = 'http://localhost:3800/api/'
  count = 0;
  constructor( private http: HttpClient) {
}

  public getServicesParent(): Observable < any > {
  return this.http.get(this.baseUrl + 'getserviceparent').pipe(
    take(1),
    map(data => {
      this.count++;
      return data;
    })
  );
}

public getServices1(): Observable < any > {
  return this.http.get(this.baseUrl + 'getservice1').pipe(
    take(1),
    map(data => {
      this.count++;
      return data;
    })
  );
}

public getServices2(): Observable < any > {
  return this.http.get(this.baseUrl + 'getservice2').pipe(
    take(1),
    map(data => {
      this.count++;
      return data;
    })
  );
}

public getServices3(): Observable < any > {
  return this.http.get(this.baseUrl + 'getservice3').pipe(
    take(1),
    map(data => {
      this.count++;
      return data;
    })
  );
}
}
