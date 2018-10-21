import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  constructor(private http: HttpClient) { }

  public getMessages() {
    return this.http.get("src/assets/message.json");
  }

  public updateMessage(messages) {
    let body = JSON.stringify(messages);
    // return this.http.put("src/assets/message.json", body);       /*for server*/
    return localStorage.setItem("messages", body);              /*for localStorage*/
  }

  public getLocalMessages() {
    return localStorage.getItem("messages") ? JSON.parse(localStorage.getItem("messages")) : { };
  }
}