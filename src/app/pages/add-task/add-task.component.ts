import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { SubTask, Task } from '../../interfaces/task';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  urgentIsActive: string = "";
  mediumIsActive: string = "";
  lowIsActive: string = "";
  @ViewChild('subtasks') subtaskRef!:ElementRef;
  subFocus = false;
  subText: string | null = null
  task: Task = {
    title: "",
    description: "",
    assignees: [],
    dueDate: 0,
    priority: "medium",
    category: "",
    subtask: []
  };



  setActive(newCategory: string) {
    this.task.priority = newCategory
  }

  preventFocusChange(event: Event) {
    event.preventDefault()
  }

  createSubtask() {
    if (this.subText) {
      let subTask: SubTask = {
        description: this.subText,
        done: false
      }
      this.task.subtask.push(subTask);
      this.subText = null;
      this.subtaskRef.nativeElement.blur()
    }
  }
}