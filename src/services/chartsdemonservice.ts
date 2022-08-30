import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartDemo } from 'src/models/chartdemo.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChartDemoService {
  public API_URL: string = 'assets/api/chart.json';
  constructor(public http: HttpClient) {}

  getAllCharts(): Observable<ChartDemo[]> {
    return this.http.get<ChartDemo[]>(this.API_URL);
  }

  

  // getCarsSmall() {
  //   return this.http
  //     .get<any>('assets/showcase/data/cars-small.json')
  //     .toPromise()
  //     .then((res) => <Car[]>res.data)
  //     .then((data) => {
  //       return data;
  //     });
  // }
}
