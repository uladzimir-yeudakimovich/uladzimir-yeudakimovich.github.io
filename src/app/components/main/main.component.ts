import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public data = [];
  public english: boolean;

  @Output() valueChange = new EventEmitter();

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(dataFromServer => { 
      for (const key in dataFromServer['main']) {
        this.data.push(dataFromServer['main'][key]);
      }
    });
  }
}