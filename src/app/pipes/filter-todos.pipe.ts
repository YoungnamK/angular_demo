import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from '../model/todo.type';

@Pipe({
  name: 'filterTodos',
  standalone: true
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: Todo[], searchWord : string ): Todo[] {
    if(!searchWord || !searchWord.length) {
      return todos;
    }
    const text = searchWord.toLowerCase();
    return todos.filter(todo =>{
      return todo.title.toLowerCase().includes(text)
    })
  }

}
