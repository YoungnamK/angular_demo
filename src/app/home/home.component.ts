import { Component } from '@angular/core';
import {GreetingComponent} from '../components/greeting/greeting.component';
import {CounterComponent} from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  homeMessage: string = 'Hello World!';

  keyUpHandler($event : KeyboardEvent) {
    console.log('keyUpHandler' + $event.key);
  }
}
