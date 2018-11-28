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
    this.createForm();
    this.getMessages();
    this.getLocalMessages();
  }

  createForm() {
    this.createMessageForm = this.formBuilder.group({
      name: [ '', Validators.required ],
      email: [ '', [ Validators.required, Validators.email ] ],
      message: [ '', [ Validators.required, Validators.minLength(2) ] ]
    });
  }
  get f() { return this.createMessageForm.controls; }

  getMessages() {
    return this.messageService.getMessages().subscribe(dataFromServer => {
      this.messagesFromServer = dataFromServer['mess'];
    });
  }

  getLocalMessages() {
    const messages = this.messageService.getLocalMessages()['mess'];
    this.messagesFromLocalStorage = messages ? messages : [];
  }

  onSubmit() {
    if (this.createMessageForm.invalid) {
      this.submitted = true;
      return;
    }
    this.messagesFromLocalStorage.push(this.createMessageForm.value);
    this.messageService.updateMessage({ mess: this.messagesFromLocalStorage });
    this.createForm();
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
