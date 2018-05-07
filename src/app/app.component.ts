import { Component } from '@angular/core';
import { Task, TASK ,STATES} from './Task';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks:Task[]= TASK;
  tasksBackup: Task[]=TASK;
  //Funcion para agregar Tareas
  addTask(task){
    console.log(task);
    let addTask:Task = new Task(); 
    let totalTasks = this.tasks.length;
    console.log(totalTasks);
    addTask.id = totalTasks;
    addTask.description = task;
    addTask.state = STATES.ACTIVO;
    this.tasks.push(addTask);
    this.backupTask();
    // this.task = this.users.filter(item => item.id !== userId);
  }
  updateTask(task:Task){
   this.tasks = this.tasks.map((task) =>{
        return task;
    });
   this.backupTask();
    console.log(task);
  }
  deleteTask(taskId:number){
    this.tasks = this.tasks.filter(item => item.id !== taskId);
    this.backupTask();
  }
  showAllTask(){
    this.tasks = this.tasksBackup;
    console.log("all");
  }
  showCompleteTask(){
    this.tasks = this.tasks.filter(item => item.state === STATES.COMPLETADO);
    console.log("Complete");
  }
  backupTask(){
    this.tasksBackup = this.tasks;
  }
}
