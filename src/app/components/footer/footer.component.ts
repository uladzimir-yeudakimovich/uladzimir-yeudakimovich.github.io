import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  registerForm: FormGroup;
  updateForm: FormGroup;
  submitted = false;

  public messages = [];
  public localMessages = [];
  public model = [];
  public later = {
    name: '',
    email: '',
    message: ''
  };
  public show = true;
  public showMessage = [];
  public copyMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    public messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getMessages();
    this.getLocalMessages(); /*if you want to clean the localStorage, will comment out this line and push new message without validation*/
  }

  createUpdateForm() {
    this.updateForm = this.formBuilder.group({
      updateMessage: [ this.showMessage[0].message ]
    });
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.later.name = this.registerForm.value.firstName;
    this.later.email = this.registerForm.value.email;
    this.later.message = this.registerForm.value.message;
    if (this.registerForm.invalid) {
      return;
    }
    this.model.push(this.later);
    this.messageService.updateMessage({mess: this.model});
    this.localMessages.push(this.later);
    this.later = {
      name: '',
      email: '',
      message: ''
    };
  }

  getMessages() {
    return this.messageService.getMessages().subscribe(dataFromServer => {
      for (const key in dataFromServer['mess']) {
        this.messages.push(dataFromServer['mess'][key]);
      }
    });
  }

  getLocalMessages() {
    for (const key in this.messageService.getLocalMessages()['mess']) {
      this.localMessages.push(this.messageService.getLocalMessages()['mess'][key]);
    }
    // this.messages.forEach((n) => this.model.push(n));          /*for server*/
    this.localMessages.forEach((n) => this.model.push(n));        /*for localStorage*/
  }

  delete($event) {
    this.localMessages.splice($event.target['id'], 1);
    this.model.splice($event.target['id'], 1);
    this.messageService.updateMessage({mess: this.model});
  }

  showDetails(e) {
    this.show = false;
    this.showMessage.push(this.localMessages[e]);
    this.copyMessage = this.localMessages[e]['message'];
    this.createUpdateForm();
  }

  updateMessage() {
    this.show = true;
    this.model[0].message = this.updateForm.value.updateMessage;
    this.showMessage = [];
    this.copyMessage = '';
    this.messageService.updateMessage({mess: this.model});
  }

  closeMessage() {
    this.show = true;
    this.showMessage[0].message = this.copyMessage;
    this.showMessage = [];
    this.copyMessage = '';
  }
}
