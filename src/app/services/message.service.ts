import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  private url: string = 'assets/message.json';
  messagesFromLocalStorage: Array<object>;

  constructor(private http: HttpClient) { }

  getMessages() {
    return this.http.get(this.url);
  }

  updateMessage(messages) {
    const body = JSON.stringify(messages);
    // return this.http.put(this.url, body);        /*for server*/
    return localStorage.setItem('messages', body);  /*for localStorage*/
  }

  getLocalMessages() {
    return localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages')) : { };
  }

  sendMessage(messages) {
    console.log(messages);
  }

}
