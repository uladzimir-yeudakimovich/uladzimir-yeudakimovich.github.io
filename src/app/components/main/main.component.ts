import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  data: any;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(dataFromServer => {
      this.data = dataFromServer;
    });
  }
}