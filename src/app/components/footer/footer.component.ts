import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  showMessageDetales = false;
  messagesFromServer = [];
  messagesFromLocalStorage = [];
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
    const messages = this.messageService.getLocalMessages()['mess'];
    this.messagesFromLocalStorage = messages ? messages : [];
  }

  showDetails(e) {
    if (e.target.nodeName !== 'SPAN') {
      this.index = e.target.nodeName === 'DIV' ? e.target.id : e.target.parentElement.id;
      this.showMessageDetales = true;
      this.showMessage = this.messagesFromLocalStorage[this.index];
      this.copyMessage = this.messagesFromLocalStorage[this.index]['message'];
    }
  }

  delete(e) {
    console.log(e.target.parentElement.id);
    this.messageService.updateMessage({ mess: this.messagesFromLocalStorage.splice(e.target.parentElement.id, 1) });
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
