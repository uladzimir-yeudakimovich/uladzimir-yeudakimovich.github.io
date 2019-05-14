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

  getLocalMessages() {
    if (localStorage.getItem('messages')) {
      this.messagesFromLocalStorage = JSON.parse(localStorage.getItem('messages'))['mess'];
    }
  }

  updateMessage(messages) {
    const body = JSON.stringify(messages);
    return localStorage.setItem('messages', body);
  }

  sendMessage(messages) {
    this.messagesFromLocalStorage.push(messages);
    const body = JSON.stringify({ mess: this.messagesFromLocalStorage });
    return localStorage.setItem('messages', body);
  }

}
