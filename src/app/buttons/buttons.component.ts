import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  @Output() clickAll:EventEmitter<string> = new EventEmitter<string>();
  @Output() clickComplete:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  showAllTask(){
    this.clickAll.emit("all");
  }
  showCompleteTask(){
    this.clickComplete.emit("complete");
  }

}
