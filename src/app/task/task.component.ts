import { Component, OnInit, Input, Output, EventEmitter , ElementRef} from '@angular/core';
import { Task, STATES} from "./../Task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task:Task ;
  @Output() clickInput:EventEmitter<Task> = new EventEmitter<Task>();
  @Output() clickButton:EventEmitter<number> = new EventEmitter<number>();
  
  constructor(private elementRef: ElementRef) { 
  }
  ngOnInit() {
    if(STATES.COMPLETADO === this.task.state){
      this.elementRef.nativeElement.style.textDecoration='line-through';
    }else{
      this.elementRef.nativeElement.style.textDecoration='none';
    }
  }
  completeTask(){
    if(STATES.COMPLETADO === this.task.state){
      this.task.state = STATES.ACTIVO;
      this.elementRef.nativeElement.style.textDecoration='none';
    }else{
      this.elementRef.nativeElement.style.textDecoration='line-through';
      this.task.state = STATES.COMPLETADO;
    }
    this.clickInput.emit(this.task);
  }
  
  deleteTask(taskId:number){
    this.clickButton.emit(taskId);
  }
}
