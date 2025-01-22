import {Component, inject, OnInit, signal} from '@angular/core';
import {TodosService} from '../services/todos.service';
import {Todo} from '../model/todo.type';
import {catchError} from 'rxjs';
import {NgIf} from '@angular/common';
import {TodoItemComponent} from '../components/todo-item/todo-item.component';
import {HighlightCompletedTodoDirective} from '../directives/highlight-completed-todo.directive';
import {FormsModule} from '@angular/forms';
import {FilterTodosPipe} from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgIf, TodoItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit{
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  searchWord: string  = '';


  ngOnInit(): void {
    console.log(this.todoService.getTodo())
    this.todoService.getTodo().pipe(
      catchError((err) => {
        console.log(err)
        throw err;
      })
    ).subscribe((todos) => {
      this.todoItems.set(todos)
    });
  }

  todoCompleteChanged(todoItem : Todo) {
    this.todoItems.update((todos) => {
      return todos.map(todo => {
        if (todo.id === todoItem.id) {
            return {
              ...todo,
              completed : !todo.completed
            }
        }
          return todo;
      })
    })
  }
}
