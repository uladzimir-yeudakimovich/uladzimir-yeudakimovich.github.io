import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  updateMessageForm: FormGroup;
  showMessageDetales = false;
  messagesFromServer = [];
  messagesFromLocalStorage = [];
  showMessage = [];
  copyMessage: string;

  constructor(
    private formBuilder: FormBuilder,
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

  delete($event) {
    this.messagesFromLocalStorage.splice($event.target['id'], 1);
    this.messageService.updateMessage({ mess: this.messagesFromLocalStorage });
  }

  showDetails(e) {
    this.showMessageDetales = true;
    this.showMessage.push(this.messagesFromLocalStorage[e]);
    this.copyMessage = this.messagesFromLocalStorage[e]['message'];
    this.createUpdateForm(e);
  }

  createUpdateForm(e) {
    this.updateMessageForm = this.formBuilder.group({
      updateMessage: [ this.messagesFromLocalStorage[e]['message'] ]
    });
  }

  updateMessage() {
    this.showMessageDetales = false;
    this.showMessage[0].message = this.updateMessageForm.value.updateMessage;
    this.showMessage = [ ];
    this.copyMessage = '';
    this.messageService.updateMessage({ mess: this.messagesFromLocalStorage });
  }

  closeMessage() {
    this.showMessageDetales = false;
    this.showMessage[0].message = this.copyMessage;
    this.showMessage = [ ];
    this.copyMessage = '';
  }
}
