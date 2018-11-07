import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private url: string = 'src/assets/data.json';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url);
  }

}
