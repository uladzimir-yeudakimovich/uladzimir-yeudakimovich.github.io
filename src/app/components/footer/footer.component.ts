import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  createMessageForm: FormGroup;
  updateMessageForm: FormGroup;
  submitted = false;
  messagesFromServer = [];
  messagesFromLocalStorage = [];
  model = [];
  newLater = {};
  showMessageDetales = false;
  showMessage = [];
  copyMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    public messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getMessages();
    this.getLocalMessages(); /*if you want to clean the localStorage, will comment out this line and push new message without validation*/
  }

  createForm() {
    this.createMessageForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  getMessages() {
    return this.messageService.getMessages().subscribe(dataFromServer => {
      for (const key in dataFromServer['mess']) {
        this.messagesFromServer.push(dataFromServer['mess'][key]);
      }
    });
  }

  getLocalMessages() {
    for (const key in this.messageService.getLocalMessages()['mess']) {
      this.messagesFromLocalStorage.push(this.messageService.getLocalMessages()['mess'][key]);
    }
    // this.messages.forEach((n) => this.model.push(n));              /*for server*/
    this.messagesFromLocalStorage.forEach((n) => this.model.push(n)); /*for localStorage*/
  }

  get f() { return this.createMessageForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.createMessageForm.invalid) {
      return;
    }
    this.newLater = {
      name: this.createMessageForm.value.firstName,
      email: this.createMessageForm.value.email,
      message: this.createMessageForm.value.message
    }
    this.model.push(this.newLater);
    this.messageService.updateMessage({mess: this.model});
    this.messagesFromLocalStorage.push(this.newLater);
    this.createForm();
  }

  delete($event) {
    this.messagesFromLocalStorage.splice($event.target['id'], 1);
    this.model.splice($event.target['id'], 1);
    this.messageService.updateMessage({mess: this.model});
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
    this.showMessage = [];
    this.copyMessage = '';
    this.messageService.updateMessage({mess: this.model});
  }

  closeMessage() {
    this.showMessageDetales = false;
    this.showMessage[0].message = this.copyMessage;
    this.showMessage = [];
    this.copyMessage = '';
  }
}
