import {Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TodosService} from '../../services/todos.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  title = 'my first ng-app';
  protected readonly signal = signal;
}
