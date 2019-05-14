import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  private url: string = 'assets/message.json';
  messagesFromLocalStorage = [];

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
    if (localStorage.getItem('messages')) {
      this.messagesFromLocalStorage = JSON.parse(localStorage.getItem('messages'))['mess'];
      this.messagesFromLocalStorage.push(messages);
      const body = JSON.stringify({ mess: this.messagesFromLocalStorage });
      return localStorage.setItem('messages', body);
    }
    else {
      const body = JSON.stringify({ mess: [messages] });
      return localStorage.setItem('messages', body);
    }
  }

}
