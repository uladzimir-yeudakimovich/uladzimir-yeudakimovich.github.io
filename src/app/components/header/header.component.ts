import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public data = [];
  public english: boolean = true;

  constructor(public dataService: DataService, public translate: TranslateService) {
    translate.setDefaultLang('ru');
  }

  ngOnInit() {
    this.dataService.getData().subscribe(dataFromServer => { 
      for (const key in dataFromServer['header']) {
        this.data.push(dataFromServer['header'][key]);
      }
    });
  }
}
