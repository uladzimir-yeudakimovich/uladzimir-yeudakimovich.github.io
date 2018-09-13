import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {}

  public getData() {
    return this.http.get("src/assets/data.json");
  }
}
