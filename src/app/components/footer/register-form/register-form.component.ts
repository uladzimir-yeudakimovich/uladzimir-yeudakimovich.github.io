import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  createMessageForm: FormGroup;
  submitted = false;
  messagesFromLocalStorage = [];

  constructor(
    private formBuilder: FormBuilder,
    public messageService: MessageService
  ) { }

  ngOnInit() {
    this.createForm();
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

}
