import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public radioGroupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      'model': true
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
