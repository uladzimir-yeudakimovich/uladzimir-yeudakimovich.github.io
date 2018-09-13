import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../services/data.service';
import { LanguageService } from '../../services/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public data = [];
  public english: boolean;

  @Output() valueChange = new EventEmitter();

  constructor(public dataService: DataService, public translate: TranslateService,  public languageService: LanguageService) {
    translate.setDefaultLang('ru');
  }

  ngOnInit() {
    this.dataService.getData().subscribe(dataFromServer => { 
      for (const key in dataFromServer['main']) {
        this.data.push(dataFromServer['main'][key]);
      }
    });
    this.english = this.languageService.getLanguage();
    console.log(this.english);
  }
}