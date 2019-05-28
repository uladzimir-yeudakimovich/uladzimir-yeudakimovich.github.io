import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isEnglish: boolean = true;

  constructor(
    private translate: TranslateService
  ) {
    translate.setDefaultLang('en');
  }

  ngOnInit() { }

  switchLanguage(language: string) {
    this.isEnglish = !this.isEnglish;
    this.translate.use(language);
  }

}
