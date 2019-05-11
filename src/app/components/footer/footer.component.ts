import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  showMessageDetales = false;
  showMessage: object;
  copyMessage: string;
  index: number;

  constructor() { }

  ngOnInit(): void { }

  // showDetails(e) {
  //   if (e.target.nodeName !== 'SPAN') {
  //     this.index = e.target.nodeName === 'DIV' ? e.target.id : e.target.parentElement.id;
  //     this.showMessageDetales = true;
  //     this.showMessage = this.messagesFromLocalStorage[this.index];
  //     this.copyMessage = this.messagesFromLocalStorage[this.index]['message'];
  //   }
  // }

  // delete(e) {
  //   this.messageService.updateMessage({ mess: this.messagesFromLocalStorage.splice(e.target.parentElement.id, 1) });
  // }

  // updateMessage() {
  //   this.showMessageDetales = false;
  //   this.messageService.updateMessage({ mess: this.messagesFromLocalStorage });
  // }

  // closeMessage() {
  //   this.showMessageDetales = false;
  //   this.messagesFromLocalStorage[this.index]['message'] = this.copyMessage;
  // }
}
