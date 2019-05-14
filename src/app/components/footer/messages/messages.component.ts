import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messagesFromServer: Array<object>;
  messagesFromLocalStorage: Array<object>;
  showMessageDetales = false;
  showMessage: object;
  copyMessage: string;
  index: number;

  constructor(
    public messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getMessages();
    this.getLocalMessages();
  }

  getMessages() {
    return this.messageService.getMessages().subscribe(dataFromServer => {
      this.messagesFromServer = dataFromServer['mess'];
    });
  }

  getLocalMessages() {
    this.messageService.getLocalMessages();
    this.messagesFromLocalStorage = this.messageService.messagesFromLocalStorage;
  }

  delete(e) {
    this.messagesFromLocalStorage.splice(e.target.parentElement.id, 1);
    this.messageService.updateMessage({ mess: this.messagesFromLocalStorage });
  }

  showDetails(e) {
    if (e.target.nodeName !== 'SPAN') {
      this.index = e.target.nodeName === 'DIV' ? e.target.id : e.target.parentElement.id;
      this.showMessageDetales = true;
      this.showMessage = this.messagesFromLocalStorage[this.index];
      this.copyMessage = this.messagesFromLocalStorage[this.index]['message'];
    }
  }

  updateMessage() {
    this.showMessageDetales = false;
    this.messageService.updateMessage({ mess: this.messagesFromLocalStorage });
  }

  closeMessage() {
    this.showMessageDetales = false;
    this.messagesFromLocalStorage[this.index]['message'] = this.copyMessage;
  }
}