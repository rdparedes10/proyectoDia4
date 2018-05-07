import { Component } from '@angular/core';
import { Task, TASK ,STATES} from './Task';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks:Task[]= TASK;
  tasksBackup: Task[]=TASK;

  urlData = 'https://gist.githubusercontent.com/jdjuan/165053e6cb479a840c88e3e94b33e724/raw/4542ef950b2b32fbe2eea0b3df0338ffe67eae12/todo.json';


  constructor(httpClient: HttpClient) {
    httpClient.get<any>(this.urlData).subscribe(data => {
        console.log(data);
        let addTask:Task = new Task(); 
        let totalTasks = this.tasks.length;
        addTask.id = totalTasks;
        addTask.description = task;
        addTask.state = STATES.ACTIVO;
    });
  }

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
